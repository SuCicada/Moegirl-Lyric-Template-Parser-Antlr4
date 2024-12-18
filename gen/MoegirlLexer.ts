// Generated from Moegirl.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MoegirlLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "BRACKET_OPEN", "BRACKET_CLOSE", 
		"WS", "STRING", "NEWLINE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MoegirlLexer._ATN, MoegirlLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Moegirl.g4"; }

	public get literalNames(): (string | null)[] { return MoegirlLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MoegirlLexer.symbolicNames; }
	public get ruleNames(): string[] { return MoegirlLexer.ruleNames; }

	public get serializedATN(): number[] { return MoegirlLexer._serializedATN; }

	public get channelNames(): string[] { return MoegirlLexer.channelNames; }

	public get modeNames(): string[] { return MoegirlLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,19,186,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
	1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
	11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,
	14,1,14,1,15,1,15,1,15,1,16,4,16,171,8,16,11,16,12,16,172,1,16,1,16,1,17,
	4,17,178,8,17,11,17,12,17,179,1,18,3,18,183,8,18,1,18,1,18,0,0,19,1,1,3,
	2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
	16,33,17,35,18,37,19,1,0,2,3,0,9,9,13,13,32,32,3,0,10,10,34,34,123,125,
	188,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,
	0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
	0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,
	0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,1,39,1,0,0,0,3,49,1,0,0,0,5,51,1,0,0,0,
	7,62,1,0,0,0,9,75,1,0,0,0,11,85,1,0,0,0,13,94,1,0,0,0,15,97,1,0,0,0,17,
	102,1,0,0,0,19,107,1,0,0,0,21,113,1,0,0,0,23,125,1,0,0,0,25,142,1,0,0,0,
	27,158,1,0,0,0,29,163,1,0,0,0,31,166,1,0,0,0,33,170,1,0,0,0,35,177,1,0,
	0,0,37,182,1,0,0,0,39,40,5,76,0,0,40,41,5,121,0,0,41,42,5,114,0,0,42,43,
	5,105,0,0,43,44,5,99,0,0,44,45,5,115,0,0,45,46,5,75,0,0,46,47,5,97,0,0,
	47,48,5,105,0,0,48,2,1,0,0,0,49,50,5,124,0,0,50,4,1,0,0,0,51,52,5,124,0,
	0,52,53,5,111,0,0,53,54,5,114,0,0,54,55,5,105,0,0,55,56,5,103,0,0,56,57,
	5,105,0,0,57,58,5,110,0,0,58,59,5,97,0,0,59,60,5,108,0,0,60,61,5,61,0,0,
	61,6,1,0,0,0,62,63,5,124,0,0,63,64,5,116,0,0,64,65,5,114,0,0,65,66,5,97,
	0,0,66,67,5,110,0,0,67,68,5,115,0,0,68,69,5,108,0,0,69,70,5,97,0,0,70,71,
	5,116,0,0,71,72,5,101,0,0,72,73,5,100,0,0,73,74,5,61,0,0,74,8,1,0,0,0,75,
	76,5,80,0,0,76,77,5,104,0,0,77,78,5,111,0,0,78,79,5,116,0,0,79,80,5,114,
	0,0,80,81,5,97,0,0,81,82,5,110,0,0,82,83,5,115,0,0,83,84,5,50,0,0,84,10,
	1,0,0,0,85,86,5,80,0,0,86,87,5,104,0,0,87,88,5,111,0,0,88,89,5,116,0,0,
	89,90,5,114,0,0,90,91,5,97,0,0,91,92,5,110,0,0,92,93,5,115,0,0,93,12,1,
	0,0,0,94,95,5,80,0,0,95,96,5,84,0,0,96,14,1,0,0,0,97,98,5,114,0,0,98,99,
	5,117,0,0,99,100,5,98,0,0,100,101,5,121,0,0,101,16,1,0,0,0,102,103,5,82,
	0,0,103,104,5,117,0,0,104,105,5,98,0,0,105,106,5,121,0,0,106,18,1,0,0,0,
	107,108,5,99,0,0,108,109,5,111,0,0,109,110,5,108,0,0,110,111,5,111,0,0,
	111,112,5,114,0,0,112,20,1,0,0,0,113,114,5,99,0,0,114,115,5,111,0,0,115,
	116,5,108,0,0,116,117,5,111,0,0,117,118,5,114,0,0,118,119,5,95,0,0,119,
	120,5,98,0,0,120,121,5,108,0,0,121,122,5,111,0,0,122,123,5,99,0,0,123,124,
	5,107,0,0,124,22,1,0,0,0,125,126,5,80,0,0,126,127,5,104,0,0,127,128,5,111,
	0,0,128,129,5,116,0,0,129,130,5,114,0,0,130,131,5,97,0,0,131,132,5,110,
	0,0,132,133,5,115,0,0,133,134,5,50,0,0,134,135,5,47,0,0,135,136,5,98,0,
	0,136,137,5,117,0,0,137,138,5,116,0,0,138,139,5,116,0,0,139,140,5,111,0,
	0,140,141,5,110,0,0,141,24,1,0,0,0,142,143,5,80,0,0,143,144,5,104,0,0,144,
	145,5,111,0,0,145,146,5,116,0,0,146,147,5,114,0,0,147,148,5,97,0,0,148,
	149,5,110,0,0,149,150,5,115,0,0,150,151,5,47,0,0,151,152,5,98,0,0,152,153,
	5,117,0,0,153,154,5,116,0,0,154,155,5,116,0,0,155,156,5,111,0,0,156,157,
	5,110,0,0,157,26,1,0,0,0,158,159,5,80,0,0,159,160,5,84,0,0,160,161,5,47,
	0,0,161,162,5,66,0,0,162,28,1,0,0,0,163,164,5,123,0,0,164,165,5,123,0,0,
	165,30,1,0,0,0,166,167,5,125,0,0,167,168,5,125,0,0,168,32,1,0,0,0,169,171,
	7,0,0,0,170,169,1,0,0,0,171,172,1,0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,
	173,174,1,0,0,0,174,175,6,16,0,0,175,34,1,0,0,0,176,178,8,1,0,0,177,176,
	1,0,0,0,178,179,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,36,1,0,0,0,
	181,183,5,13,0,0,182,181,1,0,0,0,182,183,1,0,0,0,183,184,1,0,0,0,184,185,
	5,10,0,0,185,38,1,0,0,0,4,0,172,179,182,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoegirlLexer.__ATN) {
			MoegirlLexer.__ATN = new ATNDeserializer().deserialize(MoegirlLexer._serializedATN);
		}

		return MoegirlLexer.__ATN;
	}


	static DecisionsToDFA = MoegirlLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}