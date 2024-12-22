import fs from "fs";
import {renderMoeLyrics} from "@/main";

let input = fs.readFileSync("/Users/peng/PROGRAM/GitHub/Moegirl-Lyric-Template-Parser-Antlr4/test/input.txt", "utf-8");
let res = renderMoeLyrics(input)
fs.writeFileSync('/Users/peng/PROGRAM/GitHub/Moegirl-Lyric-Template-Parser-Antlr4/test/output.html', res, 'utf-8');
