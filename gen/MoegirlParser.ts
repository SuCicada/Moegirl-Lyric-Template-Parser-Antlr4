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
	public static readonly BRACKET_OPEN = 13;
	public static readonly BRACKET_CLOSE = 14;
	public static readonly WS = 15;
	public static readonly TAG = 16;
	public static readonly STRING = 17;
	public static readonly NEWLINE = 18;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_world = 0;
	public static readonly RULE_lyricsKai = 1;
	public static readonly RULE_lyricsKaiAttr = 2;
	public static readonly RULE_lyricsKaiOriginal = 3;
	public static readonly RULE_lyricsKaiTranslated = 4;
	public static readonly RULE_template_Lj = 5;
	public static readonly RULE_oneLineContent = 6;
	public static readonly RULE_photrans = 7;
	public static readonly RULE_kanji = 8;
	public static readonly RULE_hiragana = 9;
	public static readonly RULE_otherwords = 10;
	public static readonly RULE_newline = 11;
	public static readonly RULE_color = 12;
	public static readonly RULE_contentBlock = 13;
	public static readonly RULE_coloredlink = 14;
	public static readonly RULE_colorValue = 15;
	public static readonly RULE_colorBlock = 16;
	public static readonly RULE_photransButton = 17;
	public static readonly literalNames: (string | null)[] = [ null, "'LyricsKai'", 
                                                            "'|'", "'|original='", 
                                                            "'|translated='", 
                                                            "'lj|'", "'lang|zh|'", 
                                                            "'color'", "'coloredlink'", 
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
                                                             null, "BRACKET_OPEN", 
                                                             "BRACKET_CLOSE", 
                                                             "WS", "TAG", 
                                                             "STRING", "NEWLINE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"world", "lyricsKai", "lyricsKaiAttr", "lyricsKaiOriginal", "lyricsKaiTranslated", 
		"template_Lj", "oneLineContent", "photrans", "kanji", "hiragana", "otherwords", 
		"newline", "color", "contentBlock", "coloredlink", "colorValue", "colorBlock", 
		"photransButton",
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
				this.state = 36;
				this.photransButton();
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
					this.match(MoegirlParser.NEWLINE);
					}
					}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 48;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 45;
					this.oneLineContent();
					}
					}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 51;
				this.match(MoegirlParser.NEWLINE);
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 57;
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
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 61;
			this.match(MoegirlParser.T__0);
			this.state = 72;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 65;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===18) {
						{
						{
						this.state = 62;
						this.match(MoegirlParser.NEWLINE);
						}
						}
						this.state = 67;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 68;
					this.match(MoegirlParser.T__1);
					this.state = 69;
					this.lyricsKaiAttr();
					}
					}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 75;
				this.match(MoegirlParser.NEWLINE);
				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 81;
			this.lyricsKaiOriginal();
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 82;
				this.lyricsKaiTranslated();
				}
			}

			this.state = 85;
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
			this.state = 87;
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
			this.state = 89;
			this.match(MoegirlParser.T__2);
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 90;
				this.oneLineContent();
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 401408) !== 0));
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
			this.state = 95;
			this.match(MoegirlParser.T__3);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 96;
				this.oneLineContent();
				}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 401408) !== 0));
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
	public template_Lj(): Template_LjContext {
		let localctx: Template_LjContext = new Template_LjContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MoegirlParser.RULE_template_Lj);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 101;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 102;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===6)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 103;
				this.oneLineContent();
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 401408) !== 0));
			this.state = 108;
			this.match(MoegirlParser.BRACKET_CLOSE);
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
	public oneLineContent(): OneLineContentContext {
		let localctx: OneLineContentContext = new OneLineContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MoegirlParser.RULE_oneLineContent);
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 110;
				this.otherwords();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 111;
				this.photrans();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 112;
				this.color();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 113;
				this.colorBlock();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 114;
				this.template_Lj();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 115;
				this.newline();
				}
				break;
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
		this.enterRule(localctx, 14, MoegirlParser.RULE_photrans);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 119;
			this.match(MoegirlParser.TAG);
			this.state = 120;
			this.match(MoegirlParser.T__1);
			this.state = 121;
			this.kanji();
			this.state = 122;
			this.match(MoegirlParser.T__1);
			this.state = 123;
			this.hiragana();
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 124;
				this.match(MoegirlParser.T__1);
				this.state = 125;
				this.match(MoegirlParser.STRING);
				}
				break;
			}
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 128;
				this.match(MoegirlParser.T__1);
				this.state = 129;
				this.match(MoegirlParser.STRING);
				}
			}

			this.state = 132;
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
	public kanji(): KanjiContext {
		let localctx: KanjiContext = new KanjiContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MoegirlParser.RULE_kanji);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 134;
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
			this.state = 136;
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
			this.state = 138;
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
	public newline(): NewlineContext {
		let localctx: NewlineContext = new NewlineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MoegirlParser.RULE_newline);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
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
		this.enterRule(localctx, 24, MoegirlParser.RULE_color);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 143;
			this.match(MoegirlParser.T__6);
			this.state = 144;
			this.match(MoegirlParser.T__1);
			this.state = 145;
			this.colorValue();
			this.state = 146;
			this.match(MoegirlParser.T__1);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 147;
				this.match(MoegirlParser.NEWLINE);
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 153;
				this.contentBlock();
				}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===13 || _la===17);
			this.state = 158;
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
	public contentBlock(): ContentBlockContext {
		let localctx: ContentBlockContext = new ContentBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MoegirlParser.RULE_contentBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 160;
				this.otherwords();
				}
				break;
			case 2:
				{
				this.state = 161;
				this.photrans();
				}
				break;
			case 3:
				{
				this.state = 162;
				this.color();
				}
				break;
			case 4:
				{
				this.state = 163;
				this.coloredlink();
				}
				break;
			}
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 166;
				this.newline();
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public coloredlink(): ColoredlinkContext {
		let localctx: ColoredlinkContext = new ColoredlinkContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MoegirlParser.RULE_coloredlink);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 173;
			this.match(MoegirlParser.T__7);
			this.state = 174;
			this.match(MoegirlParser.T__1);
			this.state = 175;
			this.colorValue();
			this.state = 178;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 176;
				this.match(MoegirlParser.T__1);
				this.state = 177;
				this.match(MoegirlParser.STRING);
				}
				break;
			}
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 180;
				this.match(MoegirlParser.T__1);
				this.state = 181;
				this.match(MoegirlParser.STRING);
				}
			}

			this.state = 184;
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
		this.enterRule(localctx, 30, MoegirlParser.RULE_colorValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
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
		this.enterRule(localctx, 32, MoegirlParser.RULE_colorBlock);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 188;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 189;
			this.match(MoegirlParser.T__8);
			this.state = 190;
			this.match(MoegirlParser.T__1);
			this.state = 191;
			this.colorValue();
			this.state = 192;
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
		this.enterRule(localctx, 34, MoegirlParser.RULE_photransButton);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.match(MoegirlParser.BRACKET_OPEN);
			this.state = 195;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 196;
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

	public static readonly _serializedATN: number[] = [4,1,18,199,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,1,0,3,0,38,8,0,1,0,5,0,41,8,0,10,0,12,0,44,9,0,1,0,5,0,47,8,0,10,0,
	12,0,50,9,0,1,0,5,0,53,8,0,10,0,12,0,56,9,0,1,0,3,0,59,8,0,1,1,1,1,1,1,
	5,1,64,8,1,10,1,12,1,67,9,1,1,1,1,1,5,1,71,8,1,10,1,12,1,74,9,1,1,1,5,1,
	77,8,1,10,1,12,1,80,9,1,1,1,1,1,3,1,84,8,1,1,1,1,1,1,2,1,2,1,3,1,3,4,3,
	92,8,3,11,3,12,3,93,1,4,1,4,4,4,98,8,4,11,4,12,4,99,1,5,1,5,1,5,4,5,105,
	8,5,11,5,12,5,106,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,117,8,6,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,3,7,127,8,7,1,7,1,7,3,7,131,8,7,1,7,1,7,1,8,1,8,1,
	9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,149,8,12,10,
	12,12,12,152,9,12,1,12,4,12,155,8,12,11,12,12,12,156,1,12,1,12,1,13,1,13,
	1,13,1,13,3,13,165,8,13,1,13,5,13,168,8,13,10,13,12,13,171,9,13,1,14,1,
	14,1,14,1,14,1,14,1,14,3,14,179,8,14,1,14,1,14,3,14,183,8,14,1,14,1,14,
	1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,0,0,18,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,2,1,0,5,6,1,0,10,12,
	207,0,37,1,0,0,0,2,60,1,0,0,0,4,87,1,0,0,0,6,89,1,0,0,0,8,95,1,0,0,0,10,
	101,1,0,0,0,12,116,1,0,0,0,14,118,1,0,0,0,16,134,1,0,0,0,18,136,1,0,0,0,
	20,138,1,0,0,0,22,140,1,0,0,0,24,142,1,0,0,0,26,164,1,0,0,0,28,172,1,0,
	0,0,30,186,1,0,0,0,32,188,1,0,0,0,34,194,1,0,0,0,36,38,3,34,17,0,37,36,
	1,0,0,0,37,38,1,0,0,0,38,42,1,0,0,0,39,41,5,18,0,0,40,39,1,0,0,0,41,44,
	1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,48,1,0,0,0,44,42,1,0,0,0,45,47,3,
	12,6,0,46,45,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,54,1,
	0,0,0,50,48,1,0,0,0,51,53,5,18,0,0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,
	0,0,0,54,55,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,57,59,3,2,1,0,58,57,1,0,
	0,0,58,59,1,0,0,0,59,1,1,0,0,0,60,61,5,13,0,0,61,72,5,1,0,0,62,64,5,18,
	0,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,
	0,67,65,1,0,0,0,68,69,5,2,0,0,69,71,3,4,2,0,70,65,1,0,0,0,71,74,1,0,0,0,
	72,70,1,0,0,0,72,73,1,0,0,0,73,78,1,0,0,0,74,72,1,0,0,0,75,77,5,18,0,0,
	76,75,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,
	78,1,0,0,0,81,83,3,6,3,0,82,84,3,8,4,0,83,82,1,0,0,0,83,84,1,0,0,0,84,85,
	1,0,0,0,85,86,5,14,0,0,86,3,1,0,0,0,87,88,5,17,0,0,88,5,1,0,0,0,89,91,5,
	3,0,0,90,92,3,12,6,0,91,90,1,0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,93,94,1,
	0,0,0,94,7,1,0,0,0,95,97,5,4,0,0,96,98,3,12,6,0,97,96,1,0,0,0,98,99,1,0,
	0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,9,1,0,0,0,101,102,5,13,0,0,102,104,
	7,0,0,0,103,105,3,12,6,0,104,103,1,0,0,0,105,106,1,0,0,0,106,104,1,0,0,
	0,106,107,1,0,0,0,107,108,1,0,0,0,108,109,5,14,0,0,109,11,1,0,0,0,110,117,
	3,20,10,0,111,117,3,14,7,0,112,117,3,24,12,0,113,117,3,32,16,0,114,117,
	3,10,5,0,115,117,3,22,11,0,116,110,1,0,0,0,116,111,1,0,0,0,116,112,1,0,
	0,0,116,113,1,0,0,0,116,114,1,0,0,0,116,115,1,0,0,0,117,13,1,0,0,0,118,
	119,5,13,0,0,119,120,5,16,0,0,120,121,5,2,0,0,121,122,3,16,8,0,122,123,
	5,2,0,0,123,126,3,18,9,0,124,125,5,2,0,0,125,127,5,17,0,0,126,124,1,0,0,
	0,126,127,1,0,0,0,127,130,1,0,0,0,128,129,5,2,0,0,129,131,5,17,0,0,130,
	128,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,5,14,0,0,133,15,1,0,
	0,0,134,135,5,17,0,0,135,17,1,0,0,0,136,137,5,17,0,0,137,19,1,0,0,0,138,
	139,5,17,0,0,139,21,1,0,0,0,140,141,5,18,0,0,141,23,1,0,0,0,142,143,5,13,
	0,0,143,144,5,7,0,0,144,145,5,2,0,0,145,146,3,30,15,0,146,150,5,2,0,0,147,
	149,5,18,0,0,148,147,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,
	0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,153,155,3,26,13,0,154,153,1,0,0,0,
	155,156,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,159,
	5,14,0,0,159,25,1,0,0,0,160,165,3,20,10,0,161,165,3,14,7,0,162,165,3,24,
	12,0,163,165,3,28,14,0,164,160,1,0,0,0,164,161,1,0,0,0,164,162,1,0,0,0,
	164,163,1,0,0,0,165,169,1,0,0,0,166,168,3,22,11,0,167,166,1,0,0,0,168,171,
	1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,27,1,0,0,0,171,169,1,0,0,0,
	172,173,5,13,0,0,173,174,5,8,0,0,174,175,5,2,0,0,175,178,3,30,15,0,176,
	177,5,2,0,0,177,179,5,17,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,182,1,
	0,0,0,180,181,5,2,0,0,181,183,5,17,0,0,182,180,1,0,0,0,182,183,1,0,0,0,
	183,184,1,0,0,0,184,185,5,14,0,0,185,29,1,0,0,0,186,187,5,17,0,0,187,31,
	1,0,0,0,188,189,5,13,0,0,189,190,5,9,0,0,190,191,5,2,0,0,191,192,3,30,15,
	0,192,193,5,14,0,0,193,33,1,0,0,0,194,195,5,13,0,0,195,196,7,1,0,0,196,
	197,5,14,0,0,197,35,1,0,0,0,21,37,42,48,54,58,65,72,78,83,93,99,106,116,
	126,130,150,156,164,169,178,182];

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
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(MoegirlParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(MoegirlParser.NEWLINE, i);
	}
	public oneLineContent_list(): OneLineContentContext[] {
		return this.getTypedRuleContexts(OneLineContentContext) as OneLineContentContext[];
	}
	public oneLineContent(i: number): OneLineContentContext {
		return this.getTypedRuleContext(OneLineContentContext, i) as OneLineContentContext;
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
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(MoegirlParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(MoegirlParser.NEWLINE, i);
	}
	public lyricsKaiTranslated(): LyricsKaiTranslatedContext {
		return this.getTypedRuleContext(LyricsKaiTranslatedContext, 0) as LyricsKaiTranslatedContext;
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
	public oneLineContent_list(): OneLineContentContext[] {
		return this.getTypedRuleContexts(OneLineContentContext) as OneLineContentContext[];
	}
	public oneLineContent(i: number): OneLineContentContext {
		return this.getTypedRuleContext(OneLineContentContext, i) as OneLineContentContext;
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
	public oneLineContent_list(): OneLineContentContext[] {
		return this.getTypedRuleContexts(OneLineContentContext) as OneLineContentContext[];
	}
	public oneLineContent(i: number): OneLineContentContext {
		return this.getTypedRuleContext(OneLineContentContext, i) as OneLineContentContext;
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


export class Template_LjContext extends ParserRuleContext {
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
	public oneLineContent_list(): OneLineContentContext[] {
		return this.getTypedRuleContexts(OneLineContentContext) as OneLineContentContext[];
	}
	public oneLineContent(i: number): OneLineContentContext {
		return this.getTypedRuleContext(OneLineContentContext, i) as OneLineContentContext;
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_template_Lj;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterTemplate_Lj) {
	 		listener.enterTemplate_Lj(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitTemplate_Lj) {
	 		listener.exitTemplate_Lj(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitTemplate_Lj) {
			return visitor.visitTemplate_Lj(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OneLineContentContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public otherwords(): OtherwordsContext {
		return this.getTypedRuleContext(OtherwordsContext, 0) as OtherwordsContext;
	}
	public photrans(): PhotransContext {
		return this.getTypedRuleContext(PhotransContext, 0) as PhotransContext;
	}
	public color(): ColorContext {
		return this.getTypedRuleContext(ColorContext, 0) as ColorContext;
	}
	public colorBlock(): ColorBlockContext {
		return this.getTypedRuleContext(ColorBlockContext, 0) as ColorBlockContext;
	}
	public template_Lj(): Template_LjContext {
		return this.getTypedRuleContext(Template_LjContext, 0) as Template_LjContext;
	}
	public newline(): NewlineContext {
		return this.getTypedRuleContext(NewlineContext, 0) as NewlineContext;
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_oneLineContent;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterOneLineContent) {
	 		listener.enterOneLineContent(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitOneLineContent) {
	 		listener.exitOneLineContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitOneLineContent) {
			return visitor.visitOneLineContent(this);
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
	public TAG(): TerminalNode {
		return this.getToken(MoegirlParser.TAG, 0);
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
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(MoegirlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(MoegirlParser.STRING, i);
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
	public BRACKET_CLOSE(): TerminalNode {
		return this.getToken(MoegirlParser.BRACKET_CLOSE, 0);
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(MoegirlParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(MoegirlParser.NEWLINE, i);
	}
	public contentBlock_list(): ContentBlockContext[] {
		return this.getTypedRuleContexts(ContentBlockContext) as ContentBlockContext[];
	}
	public contentBlock(i: number): ContentBlockContext {
		return this.getTypedRuleContext(ContentBlockContext, i) as ContentBlockContext;
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


export class ContentBlockContext extends ParserRuleContext {
	constructor(parser?: MoegirlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public otherwords(): OtherwordsContext {
		return this.getTypedRuleContext(OtherwordsContext, 0) as OtherwordsContext;
	}
	public photrans(): PhotransContext {
		return this.getTypedRuleContext(PhotransContext, 0) as PhotransContext;
	}
	public color(): ColorContext {
		return this.getTypedRuleContext(ColorContext, 0) as ColorContext;
	}
	public coloredlink(): ColoredlinkContext {
		return this.getTypedRuleContext(ColoredlinkContext, 0) as ColoredlinkContext;
	}
	public newline_list(): NewlineContext[] {
		return this.getTypedRuleContexts(NewlineContext) as NewlineContext[];
	}
	public newline(i: number): NewlineContext {
		return this.getTypedRuleContext(NewlineContext, i) as NewlineContext;
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_contentBlock;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterContentBlock) {
	 		listener.enterContentBlock(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitContentBlock) {
	 		listener.exitContentBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitContentBlock) {
			return visitor.visitContentBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColoredlinkContext extends ParserRuleContext {
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
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(MoegirlParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(MoegirlParser.STRING, i);
	}
    public get ruleIndex(): number {
    	return MoegirlParser.RULE_coloredlink;
	}
	public enterRule(listener: MoegirlListener): void {
	    if(listener.enterColoredlink) {
	 		listener.enterColoredlink(this);
		}
	}
	public exitRule(listener: MoegirlListener): void {
	    if(listener.exitColoredlink) {
	 		listener.exitColoredlink(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoegirlVisitor<Result>): Result {
		if (visitor.visitColoredlink) {
			return visitor.visitColoredlink(this);
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
