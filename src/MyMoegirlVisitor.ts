import MoegirlVisitor from "../gen/MoegirlVisitor";
import MoegirlParser, {
  ColorContext, LyricsKaiContext, OneLineContext,
  PhotransContext,
  SentenceContext,
  WorldContext
} from "../gen/MoegirlParser";
import {CharStream, CommonTokenStream, ParseTree,} from "antlr4";
import MoegirlLexer from "../gen/MoegirlLexer";
import myCss from "./my.css"

export default class MyMoegirlVisitor extends MoegirlVisitor<string> {
  lstyle = ''
  rstyle = ''
  lyricsKaiStyle: any = {
    width: "100%",
    reserveWidth: "267px"
  }
  getCSS = () => {
    // language=HTML
    return `
      <style>
        ${myCss}
        .Lyrics-original {
          ${this.lstyle}
        }

        .Lyrics-translated {
          ${this.rstyle}
        }

        .Lyrics .Lyrics-has-ruby {
          width: calc(${this.lyricsKaiStyle.width} - ${this.lyricsKaiStyle.reserveWidth});
        }
      </style>
    `
  }
  postRender = (visitRes: string) => {


    return `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=2, user-scalable=yes">
<!--    添加到主屏幕后，全屏显示。-->
<meta name="apple-touch-fullscreen" content="no">
<!--    这meta的作用就是删除默认的苹果工具栏和菜单栏。content有两个值”yes”和”no”,当我们需要显示工具栏和菜单栏时，这个行meta就不用加了，默认就是显示。-->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
${this.getCSS()}
<div class="mw-parser-output">
  ${visitRes}
</div>
    `
  }
  visitWorld = (ctx: WorldContext) => {
    let res = ''

    if (ctx.lyricsKai()) {
      res = this.visit(ctx.lyricsKai());
    } else if (ctx.oneLine_list()) {
      res = ctx.oneLine_list().map(one_line =>
        this.visit(one_line)
      ).join('');
    }
    res = this.postRender(res)
    return res
  }
  visitPhotrans = (ctx: PhotransContext) => {
    // console.log("Visited photrans: " + ctx);
    // ctx.tag()
    const kanji = ctx.kanji().getText().trim()
    const hiragana = ctx.hiragana().getText().trim()
    return `
        <ruby class="photrans">${kanji}<rp>(</rp><rt>${hiragana}</rt><rp>)</rp></ruby>
        `.trim()
    // return `<ruby class="photrans"><rb>${kanji}</rb>` +
    //     `<rt style="font-size:0.75em">` +
    //     `<span class="template-ruby-hidden">（</span>${hiragana}` +
    //     `<span class="template-ruby-hidden">）</span>` +
    //     `</rt></ruby>`
  }

  visitOtherwords = (ctx: any) => {
    return ctx.getText()
  }

  visitSentence = (ctx: SentenceContext) => {
    if (ctx.children) {
      return ctx.children.map(child => this.visit(child)).join('')
    }
    return ''
  }

  // visitOne_line = (ctx: One_lineContext) => {
  // const res = ctx.
  // return this.visit(ctx.sentence())
  // }
  visitLyricsKai = (ctx: LyricsKaiContext) => {
    // let lstyle = ''
    // let rstyle = ''
    for (const attr of ctx.lyricsKaiAttr_list()) {
      const kv = attr.getText().split("=");
      const key = kv[0].trim();
      const value = kv[1].trim();
      switch (key) {
        case "lstyle":
          this.lstyle = value;
          break;
        case "rstyle":
          this.rstyle = value;
          break;
        default:
          this.lyricsKaiStyle [key] = value;
      }
    }

    const originals = ctx.lyricsKaiOriginal().oneLine_list()
    const translateds = ctx.lyricsKaiTranslated().oneLine_list()

    let Lyrics_line_html = ''
    for (let i = 0; i < originals.length; i++) {
      const original = this.visit(originals[i])
      const translated = this.visit(translateds[i])
      Lyrics_line_html += `
   <div class="Lyrics-line">
    <div class="Lyrics-original"><span lang="ja">${original}</span></div>
    <div class="Lyrics-translated"><span lang="zh">${translated}</span></div>
   </div>`
    }

    return `
    <div class="Lyrics Lyrics-has-ruby">
        ${Lyrics_line_html}
    </div>
    `
  }

  visitOneLine = (ctx: OneLineContext) => {
    // const newlines = new Array(ctx.NEWLINE_list().length).join('<br>')
    // return this.visit(ctx)
    if (ctx.children) {
      const res = ctx.children.map(child => {
        return this.visit(child)
      }).join('')
      return res.trim();
    }
    return ''
  }
  visitNewline = (ctx: any) => {
    return '\n'
  }
  visitColor = (ctx: ColorContext) => {
    // ctx.BRACKET_OPEN()
    // ctx.color_content().photrans(1)
    // return ctx.color_value().getText() + col;
    const color = ctx.colorValue().getText()
    const content = this.visit(ctx.sentence())
    // const content = ctx.color_content().getText().trim()
    return `<span style="color:${color}">${content}</span>`
  }
  visitColorBlock = (ctx: any) => {
    const color = ctx.colorValue().getText()
    return `<span style="width: 10px; height: 10px; background-color: ${color}; display: inline-block;"></span>`
  }

// visitColor(ctx: ColorContext) {
//     console.log("Visited color: " + ctx.text);
//     return super.visitColor(ctx);
// }
}

export function newParser(input: string) {
  let inputStream = new CharStream(input);
  let lexer = new MoegirlLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  let parser = new MoegirlParser(tokenStream);
  return parser
}
