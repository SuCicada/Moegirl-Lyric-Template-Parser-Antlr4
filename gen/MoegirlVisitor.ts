// Generated from Moegirl.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { WorldContext } from "./MoegirlParser.js";
import { LyricsKaiContext } from "./MoegirlParser.js";
import { LyricsKaiAttrContext } from "./MoegirlParser.js";
import { LyricsKaiOriginalContext } from "./MoegirlParser.js";
import { LyricsKaiTranslatedContext } from "./MoegirlParser.js";
import { OneLineContext } from "./MoegirlParser.js";
import { PhotransContext } from "./MoegirlParser.js";
import { TagContext } from "./MoegirlParser.js";
import { KanjiContext } from "./MoegirlParser.js";
import { HiraganaContext } from "./MoegirlParser.js";
import { OtherwordsContext } from "./MoegirlParser.js";
import { SentenceContext } from "./MoegirlParser.js";
import { NewlineContext } from "./MoegirlParser.js";
import { ColorContext } from "./MoegirlParser.js";
import { ColorValueContext } from "./MoegirlParser.js";
import { ColorBlockContext } from "./MoegirlParser.js";
import { PhotransButtonContext } from "./MoegirlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MoegirlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MoegirlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MoegirlParser.world`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWorld?: (ctx: WorldContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.lyricsKai`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLyricsKai?: (ctx: LyricsKaiContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.lyricsKaiAttr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLyricsKaiAttr?: (ctx: LyricsKaiAttrContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.lyricsKaiOriginal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLyricsKaiOriginal?: (ctx: LyricsKaiOriginalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.lyricsKaiTranslated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLyricsKaiTranslated?: (ctx: LyricsKaiTranslatedContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.oneLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneLine?: (ctx: OneLineContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.photrans`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhotrans?: (ctx: PhotransContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.kanji`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKanji?: (ctx: KanjiContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.hiragana`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHiragana?: (ctx: HiraganaContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.otherwords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherwords?: (ctx: OtherwordsContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.sentence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence?: (ctx: SentenceContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.newline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewline?: (ctx: NewlineContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.color`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColor?: (ctx: ColorContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.colorValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColorValue?: (ctx: ColorValueContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.colorBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColorBlock?: (ctx: ColorBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `MoegirlParser.photransButton`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhotransButton?: (ctx: PhotransButtonContext) => Result;
}

