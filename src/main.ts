import MoegirlLexer from '@/gen/MoegirlLexer';
import MoegirlParser, {
  ColorContext, PhotransContext, SentenceContext
} from '@/gen/MoegirlParser';
import MoegirlVisitor from '../gen/MoegirlVisitor';
import {CharStream, CommonTokenStream, InputStream, CharStreams} from 'antlr4';
import MyMoegirlVisitor from "@/MyMoegirlVisitor";
// 自定义 Visitor 实现

// 示例输入
// let input = `
//     {{color_block|red}} 佐仓杏子 {{color_block|blue}} 美树沙耶香 {{color_block|#DA70D6}} 合唱
// `
// input = input.trim()
//
// // 创建词法分析器和语法分析器
// let inputStream = new CharStream(input);
// let lexer = new MoegirlLexer(inputStream);
// const tokenStream = new CommonTokenStream(lexer);
// let parser = new MoegirlParser(tokenStream);
//
// // 解析输入
// let tree = parser.world();
//
// // 使用自定义 Visitor 遍历解析树
// let visitor = new MyMoegirlVisitor();
// let visitRes = visitor.visit(tree);
// // console.log(visitRes);
// const res = visitRes
//
// const res = `
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=2, user-scalable=yes">
// <!--    添加到主屏幕后，全屏显示。-->
// <meta name="apple-touch-fullscreen" content="no">
// <!--    这meta的作用就是删除默认的苹果工具栏和菜单栏。content有两个值”yes”和”no”,当我们需要显示工具栏和菜单栏时，这个行meta就不用加了，默认就是显示。-->
// <meta name="apple-mobile-web-app-capable" content="yes">
// <meta name="apple-mobile-web-app-status-bar-style" content="black">
// <div class="mw-parser-output">
//   ${visitRes}
// </div>
// `

export function renderMoeLyrics(input: string): string {
  input = input.trim();
  let inputStream = new CharStream(input);
  let lexer = new MoegirlLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  let parser = new MoegirlParser(tokenStream);

  // 解析输入
  let tree = parser.world();

  // 使用自定义 Visitor 遍历解析树
  let visitor = new MyMoegirlVisitor();
  let visitRes = visitor.visit(tree);
  // console.log(visitRes);
  const res = visitRes
  return res
}

function build(divId?: string) {
  let element: HTMLElement | null
  if (divId) {
    element = document.getElementById(divId)
  } else {
    element = document.getElementsByTagName("lyrics")[0] as HTMLElement
  }
  console.log("parse ", element)
  if (element) {
    let begin = new Date().getTime();
    let text = element.innerHTML
    console.log("parse ", text)
    const res = renderMoeLyrics(text)
    console.log("res ", res)
    element.innerHTML = res
    element.hidden = false
    let end = new Date().getTime() - begin;
    console.log(`build ${element.tagName} (${element.id}): ${end}ms`)
  }
}

if (typeof window !== 'undefined') {
  window.onload = () => {
    build()
    // console.log("页面加载完成");
    // 在页面加载完成后执行的代码
  };
}
