import {ParseTree} from "antlr4";
import MyMoegirlVisitor, {newParser} from "../src/MyMoegirlVisitor";
import {expect, test} from "@jest/globals";


function getRes(tree:ParseTree){
    let visitor = new MyMoegirlVisitor();
    return visitor.visit(tree);
}

test('color', () => {
let input = `
{{color|red|{{Photrans2|錆|さ}}び{{Photrans2|付|つ}}いた{{Photrans2|心|こころ}}、}}
`.trim();
    let parser = newParser(input);
    let tree = parser.color();
    let res = getRes(tree);
    console.log(res);
// 解析输入
    expect(res).toBe(
        `<span style="color:red"><ruby class="photrans"> 錆 <rp>(</rp><rt>さ</rt><rp>)</rp> </ruby>び<ruby class="photrans"> 付 <rp>(</rp><rt>つ</rt><rp>)</rp> </ruby>いた<ruby class="photrans"> 心 <rp>(</rp><rt>こころ</rt><rp>)</rp> </ruby>、</span>`
    );
});