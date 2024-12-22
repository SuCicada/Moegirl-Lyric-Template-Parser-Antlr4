import fs from "fs";
import {ATNConfigSet, CharStream, CommonTokenStream, DFA, ErrorListener, Token} from "antlr4";
import MoegirlLexer from "@/gen/MoegirlLexer";
import MoegirlParser from "@/gen/MoegirlParser";
import {Recognizer} from "antlr4/src/antlr4/Recognizer";
import {RecognitionException} from "antlr4/src/antlr4/error/RecognitionException";
import MoegirlVisitor from "@/gen/MoegirlVisitor";

function valid(input: string) {
  try {
    input = input.trim();
    let inputStream = new CharStream(input);
    let lexer = new MoegirlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    let parser = new MoegirlParser(tokenStream);
    parser.removeErrorListeners();

    parser.addErrorListener(new (class extends ErrorListener<Token> {
      syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException) {
        const errmsg = `line ${line}:${column} ${msg}`
        console.error(errmsg);
        throw new Error(errmsg);
      }
    })());
// 解析输入
    let tree = parser.world();
    const visitor = new MoegirlVisitor();
    let visitRes = visitor.visit(tree);
    console.log("true");
    return true
  } catch (e) {
    console.error(e);
    return false
  }
}

const lyricsDir = "/Users/peng/PROGRAM/GitHub/sucicada.github.io/source/_posts/lyrics";
(async () => {
  let files = (await fs.promises.readdir(lyricsDir)).sort()
  // files = files.slice(0, 1)
  // files = files.filter(f => f==="乐正龙牙 - 殉道者.md")
  for (const file of files) {
    // console.log("start ",file)
    const filePath = `${lyricsDir}/${file}`
    const content = await fs.promises.readFile(filePath, "utf-8");
    const lyricsRegex = /<lyrics.*?>([\s\S]*?)<\/lyrics>/g;
    const match = lyricsRegex.exec(content)
    if (match) {
      const lyricsContent = match[1].trim()
      await fs.promises.writeFile("input0.txt", lyricsContent)
      const res = valid(lyricsContent);
      // console.log(file, res);
      if (!res) {
        console.error("\x1b[31m%s\x1b[0m", `parse error:`, file);
      } else {
        console.log("\x1b[32m%s\x1b[0m", `parse ok:`, file);
      }
    } else {
      console.error("find lyrics error", file);
    }
  }
})()
