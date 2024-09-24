// Generated from Moegirl.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MoegirlListener from "./MoegirlListener.js";
import MoegirlVisitor from "./MoegirlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MoegirlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly BRACKET_OPEN = 15;
	public static readonly BRACKET_CLOSE = 16;
	public static readonly WS = 17;
	public static readonly STRING = 18;
	public static readonly NEWLINE = 19;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_world = 0;
	public static readonly RULE_lyricsKai = 1;
	public static readonly RULE_lyricsKaiAttr = 2;
	public static readonly RULE_lyricsKaiOriginal = 3;
	public static readonly RULE_lyricsKaiTranslated = 4;
	public static readonly RULE_oneLine = 5;
	public static readonly RULE_photrans = 6;
	public static readonly RULE_tag = 7;
	public static readonly RULE_kanji = 8;
	public static readonly RULE_hiragana = 9;
	public static readonly RULE_otherwords = 10;
	public static readonly RULE_sentence = 11;
	public static readonly RULE_newline = 12;
	public static readonly RULE_color = 13;
	public static readonly RULE_colorValue = 14;
	public static readonly RULE_colorBlock = 15;
	public static readonly RULE_photransButton = 16;
	public static readonly literalNames: (string | null)[] = [ null, "'LyricsKai'", 
                                                            "'|'", "'|original='", 
                                                            "'|translated='", 
                                                            "'Photrans2'", 
                                                            "'Photrans'", 
                                                            "'PT'", "'ruby'", 
                                                            "'Ruby'", "'color'", 
                                                            "'color_block'", 
                                                            "'Photrans2/button'", 
                                                            "'Photrans/button'", 
                                                            "'PT/B'", "'{{'", 
                                                            "'}}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "BRACKET_OPEN", 
                                                             "BRACKET_CLOSE", 
                                                             "WS", "STRING", 
                                                             "NEWLINE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"world", "lyricsKai", "lyricsKaiAttr", "lyricsKaiOriginal", "lyricsKaiTranslated", 
		"oneLine", "photrans", "tag", "kanji", "hiragana", "otherwords", "sentence", 
		"newline", "color", "colorValue", "colorBlock", "photransButton",
	];
	public get grammarFileName(): string { return "Moegirl.g4"; }
	public get literalNames(): (string | null)[] { return MoegirlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MoegirlParser.symbolicNames; }
	public get ruleNames(): string[] { return MoegirlParser.ruleNames; }
	public get serializedATN(): number[] { return MoegirlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MoegirlParser._ATN, MoegirlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public world(): WorldContext {
		let localctx: WorldContext = new WorldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MoegirlParser.RULE_world);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 34;
				this.photransButton();
				this.state = 35;
				this.match(MoegirlParser.NEWLINE);
				}
				break;
			}
			this.state = 42;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 39;
					this.oneLine();
					}
					}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 45;
				this.lyricsKai();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lyricsKai(): LyricsKaiContext {
		let localctx: LyricsKaiContext = new LyricsKaiContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MoegirlParser.RULE_lyricsKai);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 49;
			this.match(MoegirlParser.T__0);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2) {
				{
				{
				this.state = 50;
				this.match(MoegirlParser.T__1);
				this.state = 51;
				this.lyricsKaiAttr();
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 52;
					this.match(MoegirlParser.NEWLINE);
					}
				}

				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 60;
			this.lyricsKaiOriginal();
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 61;
				this.lyricsKaiTranslated();
				}
			}

			this.state = 64;
			this.match(MoegirlParser.BRACKET_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lyricsKaiAttr(): LyricsKaiAttrContext {
		let localctx: LyricsKaiAttrContext = new LyricsKaiAttrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MoegirlParser.RULE_lyricsKaiAttr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			this.match(MoegirlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lyricsKaiOriginal(): LyricsKaiOriginalContext {
		let localctx: LyricsKaiOriginalContext = new LyricsKaiOriginalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MoegirlParser.RULE_lyricsKaiOriginal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.match(MoegirlParser.T__2);
			this.state = 69;
			this.match(MoegirlParser.NEWLINE);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 70;
				this.oneLine();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===15 || _la===18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lyricsKaiTranslated(): LyricsKaiTranslatedContext {
		let localctx: LyricsKaiTranslatedContext = new LyricsKaiTranslatedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MoegirlParser.RULE_lyricsKaiTranslated);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(MoegirlParser.T__3);
			this.state = 76;
			this.match(MoegirlParser.NEWLINE);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 77;
				this.oneLine();
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===15 || _la===18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oneLine(): OneLineContext {
		let localctx: OneLineContext = new OneLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MoegirlParser.RULE_oneLine);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 86;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 82;
					this.otherwords();
					}
					break;
				case 2:
					{
					this.state = 83;
					this.photrans();
					}
					break;
				case 3:
					{
					this.state = 84;
					this.color();
					}
					break;
				case 4:
					{
					this.state = 85;
					this.colorBlock();
					}
					break;
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===15 || _la===18);
			this.state = 96;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				{
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 90;
					this.newline();
					}
					}
					this.state = 93;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===19);
				}
				break;
			case -1:
				{
				this.state = 95;
				this.match(MoegirlParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public photrans(): PhotransContext {
		let localctx: PhotransContext = new PhotransContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MoegirlParser.RULE_photrans);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 99;
			this.tag();
			this.state = 100;
			this.match(MoegirlParser.T__1);
			this.state = 101;
			this.kanji();
			this.state = 102;
			this.match(MoegirlParser.T__1);
			this.state = 103;
			this.hiragana();
			this.state = 104;
			this.match(MoegirlParser.BRACKET_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tag(): TagContext {
		let localctx: TagContext = new TagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MoegirlParser.RULE_tag);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 106;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 992) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public kanji(): KanjiContext {
		let localctx: KanjiContext = new KanjiContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MoegirlParser.RULE_kanji);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this.match(MoegirlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hiragana(): HiraganaContext {
		let localctx: HiraganaContext = new HiraganaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MoegirlParser.RULE_hiragana);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this.match(MoegirlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public otherwords(): OtherwordsContext {
		let localctx: OtherwordsContext = new OtherwordsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MoegirlParser.RULE_otherwords);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 112;
			this.match(MoegirlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sentence(): SentenceContext {
		let localctx: SentenceContext = new SentenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MoegirlParser.RULE_sentence);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 116;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 18:
					{
					this.state = 114;
					this.otherwords();
					}
					break;
				case 15:
					{
					this.state = 115;
					this.photrans();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===15 || _la===18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public newline(): NewlineContext {
		let localctx: NewlineContext = new NewlineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MoegirlParser.RULE_newline);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this.match(MoegirlParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public color(): ColorContext {
		let localctx: ColorContext = new ColorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MoegirlParser.RULE_color);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 122;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 123;
			this.match(MoegirlParser.T__9);
			this.state = 124;
			this.match(MoegirlParser.T__1);
			this.state = 125;
			this.colorValue();
			this.state = 126;
			this.match(MoegirlParser.T__1);
			this.state = 127;
			this.sentence();
			this.state = 128;
			this.match(MoegirlParser.BRACKET_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public colorValue(): ColorValueContext {
		let localctx: ColorValueContext = new ColorValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MoegirlParser.RULE_colorValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 130;
			this.match(MoegirlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public colorBlock(): ColorBlockContext {
		let localctx: ColorBlockContext = new ColorBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, MoegirlParser.RULE_colorBlock);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 133;
			this.match(MoegirlParser.T__10);
			this.state = 134;
			this.match(MoegirlParser.T__1);
			this.state = 135;
			this.colorValue();
			this.state = 136;
			this.match(MoegirlParser.BRACKET_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public photransButton(): PhotransButtonContext {
		let localctx: PhotransButtonContext = new PhotransButtonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, MoegirlParser.RULE_photransButton);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 139;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 28672) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 140;
			this.match(MoegirlParser.BRACKET_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,19,143,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	1,0,1,0,3,0,38,8,0,1,0,5,0,41,8,0,10,0,12,0,44,9,0,1,0,3,0,47,8,0,1,1,1,
	1,1,1,1,1,1,1,3,1,54,8,1,5,1,56,8,1,10,1,12,1,59,9,1,1,1,1,1,3,1,63,8,1,
	1,1,1,1,1,2,1,2,1,3,1,3,1,3,4,3,72,8,3,11,3,12,3,73,1,4,1,4,1,4,4,4,79,
	8,4,11,4,12,4,80,1,5,1,5,1,5,1,5,4,5,87,8,5,11,5,12,5,88,1,5,4,5,92,8,5,
	11,5,12,5,93,1,5,3,5,97,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,
	1,8,1,9,1,9,1,10,1,10,1,11,1,11,4,11,117,8,11,11,11,12,11,118,1,12,1,12,
	1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,15,1,
	15,1,15,1,16,1,16,1,16,1,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,0,2,1,0,5,9,1,0,12,14,141,0,37,1,0,0,0,2,48,1,0,0,0,4,66,
	1,0,0,0,6,68,1,0,0,0,8,75,1,0,0,0,10,86,1,0,0,0,12,98,1,0,0,0,14,106,1,
	0,0,0,16,108,1,0,0,0,18,110,1,0,0,0,20,112,1,0,0,0,22,116,1,0,0,0,24,120,
	1,0,0,0,26,122,1,0,0,0,28,130,1,0,0,0,30,132,1,0,0,0,32,138,1,0,0,0,34,
	35,3,32,16,0,35,36,5,19,0,0,36,38,1,0,0,0,37,34,1,0,0,0,37,38,1,0,0,0,38,
	42,1,0,0,0,39,41,3,10,5,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,
	43,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,45,47,3,2,1,0,46,45,1,0,0,0,46,47,
	1,0,0,0,47,1,1,0,0,0,48,49,5,15,0,0,49,57,5,1,0,0,50,51,5,2,0,0,51,53,3,
	4,2,0,52,54,5,19,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,55,50,1,
	0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,
	0,0,60,62,3,6,3,0,61,63,3,8,4,0,62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,0,0,
	0,64,65,5,16,0,0,65,3,1,0,0,0,66,67,5,18,0,0,67,5,1,0,0,0,68,69,5,3,0,0,
	69,71,5,19,0,0,70,72,3,10,5,0,71,70,1,0,0,0,72,73,1,0,0,0,73,71,1,0,0,0,
	73,74,1,0,0,0,74,7,1,0,0,0,75,76,5,4,0,0,76,78,5,19,0,0,77,79,3,10,5,0,
	78,77,1,0,0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,9,1,0,0,0,82,
	87,3,20,10,0,83,87,3,12,6,0,84,87,3,26,13,0,85,87,3,30,15,0,86,82,1,0,0,
	0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,88,1,0,0,0,88,86,1,0,0,0,
	88,89,1,0,0,0,89,96,1,0,0,0,90,92,3,24,12,0,91,90,1,0,0,0,92,93,1,0,0,0,
	93,91,1,0,0,0,93,94,1,0,0,0,94,97,1,0,0,0,95,97,5,0,0,1,96,91,1,0,0,0,96,
	95,1,0,0,0,97,11,1,0,0,0,98,99,5,15,0,0,99,100,3,14,7,0,100,101,5,2,0,0,
	101,102,3,16,8,0,102,103,5,2,0,0,103,104,3,18,9,0,104,105,5,16,0,0,105,
	13,1,0,0,0,106,107,7,0,0,0,107,15,1,0,0,0,108,109,5,18,0,0,109,17,1,0,0,
	0,110,111,5,18,0,0,111,19,1,0,0,0,112,113,5,18,0,0,113,21,1,0,0,0,114,117,
	3,20,10,0,115,117,3,12,6,0,116,114,1,0,0,0,116,115,1,0,0,0,117,118,1,0,
	0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,23,1,0,0,0,120,121,5,19,0,0,121,
	25,1,0,0,0,122,123,5,15,0,0,123,124,5,10,0,0,124,125,5,2,0,0,125,126,3,
	28,14,0,126,127,5,2,0,0,127,128,3,22,11,0,128,129,5,16,0,0,129,27,1,0,0,
	0,130,131,5,18,0,0,131,29,1,0,0,0,132,133,5,15,0,0,133,134,5,11,0,0,134,
	135,5,2,0,0,135,136,3,28,14,0,136,137,5,16,0,0,137,31,1,0,0,0,138,139,5,
	15,0,0,139,140,7,1,0,0,140,141,5,16,0,0,141,33,1,0,0,0,14,37,42,46,53,57,
	62,73,80,86,88,93,96,116,118];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoegirlParser.__ATN) {
			MoegirlParser.__ATN = new ATNDeserializer().deserialize(MoegirlParser._serializedATN);
		}

		return MoegirlParser.__ATN;
	}


	static DecisionsToDFA = MoegirlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class WorldContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public photransButton(): PhotransButtonContext {
		return this.getTypedRuleContext(PhotransButtonContext, 0) as PhotransButtonContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MoegirlParser.NEWLINE, 0);
	}
	public oneLine_list(): OneLineContext[] {
		return this.getTypedRuleContexts(OneLineContext) as OneLineContext[];
	}
	public oneLine(i: number): OneLineContext {
		return this.getTypedRuleContext(OneLineContext, i) as OneLineContext;
	}
	public lyricsKai(): LyricsKaiContext {
		return this.getTypedRuleContext(LyricsKaiContext, 0) as LyricsKaiContext;
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_world;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterWorld) {
	 		listener.enterWorld(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitWorld) {
	 		listener.exitWorld(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitWorld) {
			return visitor.visitWorld(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LyricsKaiContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRACKET_OPEN(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_OPEN, 0);
	}
	public lyricsKaiOriginal(): LyricsKaiOriginalContext {
		return this.getTypedRuleContext(LyricsKaiOriginalContext, 0) as LyricsKaiOriginalContext;
	}
	public BRACKET_CLOSE(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_CLOSE, 0);
	}
	public lyricsKaiAttr_list(): LyricsKaiAttrContext[] {
		return this.getTypedRuleContexts(LyricsKaiAttrContext) as LyricsKaiAttrContext[];
	}
	public lyricsKaiAttr(i: number): LyricsKaiAttrContext {
		return this.getTypedRuleContext(LyricsKaiAttrContext, i) as LyricsKaiAttrContext;
	}
	public lyricsKaiTranslated(): LyricsKaiTranslatedContext {
		return this.getTypedRuleContext(LyricsKaiTranslatedContext, 0) as LyricsKaiTranslatedContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(MoegirlParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(MoegirlParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_lyricsKai;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterLyricsKai) {
	 		listener.enterLyricsKai(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitLyricsKai) {
	 		listener.exitLyricsKai(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitLyricsKai) {
			return visitor.visitLyricsKai(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LyricsKaiAttrContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(MoegirlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_lyricsKaiAttr;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterLyricsKaiAttr) {
	 		listener.enterLyricsKaiAttr(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitLyricsKaiAttr) {
	 		listener.exitLyricsKaiAttr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitLyricsKaiAttr) {
			return visitor.visitLyricsKaiAttr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LyricsKaiOriginalContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MoegirlParser.NEWLINE, 0);
	}
	public oneLine_list(): OneLineContext[] {
		return this.getTypedRuleContexts(OneLineContext) as OneLineContext[];
	}
	public oneLine(i: number): OneLineContext {
		return this.getTypedRuleContext(OneLineContext, i) as OneLineContext;
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_lyricsKaiOriginal;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterLyricsKaiOriginal) {
	 		listener.enterLyricsKaiOriginal(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitLyricsKaiOriginal) {
	 		listener.exitLyricsKaiOriginal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitLyricsKaiOriginal) {
			return visitor.visitLyricsKaiOriginal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LyricsKaiTranslatedContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MoegirlParser.NEWLINE, 0);
	}
	public oneLine_list(): OneLineContext[] {
		return this.getTypedRuleContexts(OneLineContext) as OneLineContext[];
	}
	public oneLine(i: number): OneLineContext {
		return this.getTypedRuleContext(OneLineContext, i) as OneLineContext;
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_lyricsKaiTranslated;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterLyricsKaiTranslated) {
	 		listener.enterLyricsKaiTranslated(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitLyricsKaiTranslated) {
	 		listener.exitLyricsKaiTranslated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitLyricsKaiTranslated) {
			return visitor.visitLyricsKaiTranslated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneLineContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(MoegirlParser.EOF, 0);
	}
	public otherwords_list(): OtherwordsContext[] {
		return this.getTypedRuleContexts(OtherwordsContext) as OtherwordsContext[];
	}
	public otherwords(i: number): OtherwordsContext {
		return this.getTypedRuleContext(OtherwordsContext, i) as OtherwordsContext;
	}
	public photrans_list(): PhotransContext[] {
		return this.getTypedRuleContexts(PhotransContext) as PhotransContext[];
	}
	public photrans(i: number): PhotransContext {
		return this.getTypedRuleContext(PhotransContext, i) as PhotransContext;
	}
	public color_list(): ColorContext[] {
		return this.getTypedRuleContexts(ColorContext) as ColorContext[];
	}
	public color(i: number): ColorContext {
		return this.getTypedRuleContext(ColorContext, i) as ColorContext;
	}
	public colorBlock_list(): ColorBlockContext[] {
		return this.getTypedRuleContexts(ColorBlockContext) as ColorBlockContext[];
	}
	public colorBlock(i: number): ColorBlockContext {
		return this.getTypedRuleContext(ColorBlockContext, i) as ColorBlockContext;
	}
	public newline_list(): NewlineContext[] {
		return this.getTypedRuleContexts(NewlineContext) as NewlineContext[];
	}
	public newline(i: number): NewlineContext {
		return this.getTypedRuleContext(NewlineContext, i) as NewlineContext;
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_oneLine;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterOneLine) {
	 		listener.enterOneLine(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitOneLine) {
	 		listener.exitOneLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitOneLine) {
			return visitor.visitOneLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhotransContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRACKET_OPEN(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_OPEN, 0);
	}
	public tag(): TagContext {
		return this.getTypedRuleContext(TagContext, 0) as TagContext;
	}
	public kanji(): KanjiContext {
		return this.getTypedRuleContext(KanjiContext, 0) as KanjiContext;
	}
	public hiragana(): HiraganaContext {
		return this.getTypedRuleContext(HiraganaContext, 0) as HiraganaContext;
	}
	public BRACKET_CLOSE(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_photrans;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterPhotrans) {
	 		listener.enterPhotrans(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitPhotrans) {
	 		listener.exitPhotrans(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitPhotrans) {
			return visitor.visitPhotrans(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_tag;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterTag) {
	 		listener.enterTag(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitTag) {
	 		listener.exitTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitTag) {
			return visitor.visitTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KanjiContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(MoegirlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_kanji;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterKanji) {
	 		listener.enterKanji(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitKanji) {
	 		listener.exitKanji(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitKanji) {
			return visitor.visitKanji(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HiraganaContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(MoegirlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_hiragana;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterHiragana) {
	 		listener.enterHiragana(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitHiragana) {
	 		listener.exitHiragana(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitHiragana) {
			return visitor.visitHiragana(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OtherwordsContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(MoegirlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_otherwords;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterOtherwords) {
	 		listener.enterOtherwords(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitOtherwords) {
	 		listener.exitOtherwords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitOtherwords) {
			return visitor.visitOtherwords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SentenceContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public otherwords_list(): OtherwordsContext[] {
		return this.getTypedRuleContexts(OtherwordsContext) as OtherwordsContext[];
	}
	public otherwords(i: number): OtherwordsContext {
		return this.getTypedRuleContext(OtherwordsContext, i) as OtherwordsContext;
	}
	public photrans_list(): PhotransContext[] {
		return this.getTypedRuleContexts(PhotransContext) as PhotransContext[];
	}
	public photrans(i: number): PhotransContext {
		return this.getTypedRuleContext(PhotransContext, i) as PhotransContext;
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_sentence;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterSentence) {
	 		listener.enterSentence(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitSentence) {
	 		listener.exitSentence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitSentence) {
			return visitor.visitSentence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewlineContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MoegirlParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_newline;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterNewline) {
	 		listener.enterNewline(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitNewline) {
	 		listener.exitNewline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitNewline) {
			return visitor.visitNewline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColorContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRACKET_OPEN(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_OPEN, 0);
	}
	public colorValue(): ColorValueContext {
		return this.getTypedRuleContext(ColorValueContext, 0) as ColorValueContext;
	}
	public sentence(): SentenceContext {
		return this.getTypedRuleContext(SentenceContext, 0) as SentenceContext;
	}
	public BRACKET_CLOSE(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_color;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterColor) {
	 		listener.enterColor(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitColor) {
	 		listener.exitColor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitColor) {
			return visitor.visitColor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColorValueContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(MoegirlParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_colorValue;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterColorValue) {
	 		listener.enterColorValue(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitColorValue) {
	 		listener.exitColorValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitColorValue) {
			return visitor.visitColorValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColorBlockContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRACKET_OPEN(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_OPEN, 0);
	}
	public colorValue(): ColorValueContext {
		return this.getTypedRuleContext(ColorValueContext, 0) as ColorValueContext;
	}
	public BRACKET_CLOSE(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_colorBlock;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterColorBlock) {
	 		listener.enterColorBlock(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitColorBlock) {
	 		listener.exitColorBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitColorBlock) {
			return visitor.visitColorBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhotransButtonContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRACKET_OPEN(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_OPEN, 0);
	}
	public BRACKET_CLOSE(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_photransButton;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterPhotransButton) {
	 		listener.enterPhotransButton(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitPhotransButton) {
	 		listener.exitPhotransButton(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitPhotransButton) {
			return visitor.visitPhotransButton(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
