import fs from "fs";
import {renderMoeLyrics} from "../src/main";

let input = fs.readFileSync("/Users/peng/PROGRAM/GitHub/Moegirl-Lyric-Template-Parser-Antlr4/src/input.txt", "utf-8");
let res = renderMoeLyrics(input)
fs.writeFileSync('/Users/peng/PROGRAM/GitHub/Moegirl-Lyric-Template-Parser-Antlr4/test/output.html', res, 'utf-8');
