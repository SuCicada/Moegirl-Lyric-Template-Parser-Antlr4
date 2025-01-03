// Generated from Moegirl.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { WorldContext } from "./MoegirlParser.js";
import { LyricsKaiContext } from "./MoegirlParser.js";
import { LyricsKaiAttrContext } from "./MoegirlParser.js";
import { LyricsKaiOriginalContext } from "./MoegirlParser.js";
import { LyricsKaiTranslatedContext } from "./MoegirlParser.js";
import { Template_LjContext } from "./MoegirlParser.js";
import { OneLineContentContext } from "./MoegirlParser.js";
import { PhotransContext } from "./MoegirlParser.js";
import { KanjiContext } from "./MoegirlParser.js";
import { HiraganaContext } from "./MoegirlParser.js";
import { OtherwordsContext } from "./MoegirlParser.js";
import { NewlineContext } from "./MoegirlParser.js";
import { ColorContext } from "./MoegirlParser.js";
import { ContentBlockContext } from "./MoegirlParser.js";
import { ColoredlinkContext } from "./MoegirlParser.js";
import { ColorValueContext } from "./MoegirlParser.js";
import { ColorBlockContext } from "./MoegirlParser.js";
import { PhotransButtonContext } from "./MoegirlParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MoegirlParser`.
 */
export default class MoegirlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MoegirlParser.world`.
	 * @param ctx the parse tree
	 */
	enterWorld?: (ctx: WorldContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.world`.
	 * @param ctx the parse tree
	 */
	exitWorld?: (ctx: WorldContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.lyricsKai`.
	 * @param ctx the parse tree
	 */
	enterLyricsKai?: (ctx: LyricsKaiContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.lyricsKai`.
	 * @param ctx the parse tree
	 */
	exitLyricsKai?: (ctx: LyricsKaiContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.lyricsKaiAttr`.
	 * @param ctx the parse tree
	 */
	enterLyricsKaiAttr?: (ctx: LyricsKaiAttrContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.lyricsKaiAttr`.
	 * @param ctx the parse tree
	 */
	exitLyricsKaiAttr?: (ctx: LyricsKaiAttrContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.lyricsKaiOriginal`.
	 * @param ctx the parse tree
	 */
	enterLyricsKaiOriginal?: (ctx: LyricsKaiOriginalContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.lyricsKaiOriginal`.
	 * @param ctx the parse tree
	 */
	exitLyricsKaiOriginal?: (ctx: LyricsKaiOriginalContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.lyricsKaiTranslated`.
	 * @param ctx the parse tree
	 */
	enterLyricsKaiTranslated?: (ctx: LyricsKaiTranslatedContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.lyricsKaiTranslated`.
	 * @param ctx the parse tree
	 */
	exitLyricsKaiTranslated?: (ctx: LyricsKaiTranslatedContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.template_Lj`.
	 * @param ctx the parse tree
	 */
	enterTemplate_Lj?: (ctx: Template_LjContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.template_Lj`.
	 * @param ctx the parse tree
	 */
	exitTemplate_Lj?: (ctx: Template_LjContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.oneLineContent`.
	 * @param ctx the parse tree
	 */
	enterOneLineContent?: (ctx: OneLineContentContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.oneLineContent`.
	 * @param ctx the parse tree
	 */
	exitOneLineContent?: (ctx: OneLineContentContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.photrans`.
	 * @param ctx the parse tree
	 */
	enterPhotrans?: (ctx: PhotransContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.photrans`.
	 * @param ctx the parse tree
	 */
	exitPhotrans?: (ctx: PhotransContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.kanji`.
	 * @param ctx the parse tree
	 */
	enterKanji?: (ctx: KanjiContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.kanji`.
	 * @param ctx the parse tree
	 */
	exitKanji?: (ctx: KanjiContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.hiragana`.
	 * @param ctx the parse tree
	 */
	enterHiragana?: (ctx: HiraganaContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.hiragana`.
	 * @param ctx the parse tree
	 */
	exitHiragana?: (ctx: HiraganaContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.otherwords`.
	 * @param ctx the parse tree
	 */
	enterOtherwords?: (ctx: OtherwordsContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.otherwords`.
	 * @param ctx the parse tree
	 */
	exitOtherwords?: (ctx: OtherwordsContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.newline`.
	 * @param ctx the parse tree
	 */
	enterNewline?: (ctx: NewlineContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.newline`.
	 * @param ctx the parse tree
	 */
	exitNewline?: (ctx: NewlineContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.color`.
	 * @param ctx the parse tree
	 */
	enterColor?: (ctx: ColorContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.color`.
	 * @param ctx the parse tree
	 */
	exitColor?: (ctx: ColorContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.contentBlock`.
	 * @param ctx the parse tree
	 */
	enterContentBlock?: (ctx: ContentBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.contentBlock`.
	 * @param ctx the parse tree
	 */
	exitContentBlock?: (ctx: ContentBlockContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.coloredlink`.
	 * @param ctx the parse tree
	 */
	enterColoredlink?: (ctx: ColoredlinkContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.coloredlink`.
	 * @param ctx the parse tree
	 */
	exitColoredlink?: (ctx: ColoredlinkContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.colorValue`.
	 * @param ctx the parse tree
	 */
	enterColorValue?: (ctx: ColorValueContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.colorValue`.
	 * @param ctx the parse tree
	 */
	exitColorValue?: (ctx: ColorValueContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.colorBlock`.
	 * @param ctx the parse tree
	 */
	enterColorBlock?: (ctx: ColorBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.colorBlock`.
	 * @param ctx the parse tree
	 */
	exitColorBlock?: (ctx: ColorBlockContext) => void;
	/**
	 * Enter a parse tree produced by `MoegirlParser.photransButton`.
	 * @param ctx the parse tree
	 */
	enterPhotransButton?: (ctx: PhotransButtonContext) => void;
	/**
	 * Exit a parse tree produced by `MoegirlParser.photransButton`.
	 * @param ctx the parse tree
	 */
	exitPhotransButton?: (ctx: PhotransButtonContext) => void;
}

