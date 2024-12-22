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
	public static readonly BRACKET_OPEN = 13;
	public static readonly BRACKET_CLOSE = 14;
	public static readonly WS = 15;
	public static readonly TAG = 16;
	public static readonly STRING = 17;
	public static readonly NEWLINE = 18;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "BRACKET_OPEN", "BRACKET_CLOSE", "WS", "TAG", 
		"STRING", "NEWLINE",
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

	public static readonly _serializedATN: number[] = [4,0,18,206,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,
	6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,
	8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,
	12,1,12,1,12,1,13,1,13,1,13,1,14,4,14,162,8,14,11,14,12,14,163,1,14,1,14,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,195,
	8,15,1,16,4,16,198,8,16,11,16,12,16,199,1,17,3,17,203,8,17,1,17,1,17,0,
	0,18,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
	14,29,15,31,16,33,17,35,18,1,0,2,3,0,9,9,13,13,32,32,2,0,10,10,123,125,
	212,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,
	0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
	0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,
	0,0,0,0,35,1,0,0,0,1,37,1,0,0,0,3,47,1,0,0,0,5,49,1,0,0,0,7,60,1,0,0,0,
	9,73,1,0,0,0,11,77,1,0,0,0,13,86,1,0,0,0,15,92,1,0,0,0,17,104,1,0,0,0,19,
	116,1,0,0,0,21,133,1,0,0,0,23,149,1,0,0,0,25,154,1,0,0,0,27,157,1,0,0,0,
	29,161,1,0,0,0,31,194,1,0,0,0,33,197,1,0,0,0,35,202,1,0,0,0,37,38,5,76,
	0,0,38,39,5,121,0,0,39,40,5,114,0,0,40,41,5,105,0,0,41,42,5,99,0,0,42,43,
	5,115,0,0,43,44,5,75,0,0,44,45,5,97,0,0,45,46,5,105,0,0,46,2,1,0,0,0,47,
	48,5,124,0,0,48,4,1,0,0,0,49,50,5,124,0,0,50,51,5,111,0,0,51,52,5,114,0,
	0,52,53,5,105,0,0,53,54,5,103,0,0,54,55,5,105,0,0,55,56,5,110,0,0,56,57,
	5,97,0,0,57,58,5,108,0,0,58,59,5,61,0,0,59,6,1,0,0,0,60,61,5,124,0,0,61,
	62,5,116,0,0,62,63,5,114,0,0,63,64,5,97,0,0,64,65,5,110,0,0,65,66,5,115,
	0,0,66,67,5,108,0,0,67,68,5,97,0,0,68,69,5,116,0,0,69,70,5,101,0,0,70,71,
	5,100,0,0,71,72,5,61,0,0,72,8,1,0,0,0,73,74,5,108,0,0,74,75,5,106,0,0,75,
	76,5,124,0,0,76,10,1,0,0,0,77,78,5,108,0,0,78,79,5,97,0,0,79,80,5,110,0,
	0,80,81,5,103,0,0,81,82,5,124,0,0,82,83,5,122,0,0,83,84,5,104,0,0,84,85,
	5,124,0,0,85,12,1,0,0,0,86,87,5,99,0,0,87,88,5,111,0,0,88,89,5,108,0,0,
	89,90,5,111,0,0,90,91,5,114,0,0,91,14,1,0,0,0,92,93,5,99,0,0,93,94,5,111,
	0,0,94,95,5,108,0,0,95,96,5,111,0,0,96,97,5,114,0,0,97,98,5,101,0,0,98,
	99,5,100,0,0,99,100,5,108,0,0,100,101,5,105,0,0,101,102,5,110,0,0,102,103,
	5,107,0,0,103,16,1,0,0,0,104,105,5,99,0,0,105,106,5,111,0,0,106,107,5,108,
	0,0,107,108,5,111,0,0,108,109,5,114,0,0,109,110,5,95,0,0,110,111,5,98,0,
	0,111,112,5,108,0,0,112,113,5,111,0,0,113,114,5,99,0,0,114,115,5,107,0,
	0,115,18,1,0,0,0,116,117,5,80,0,0,117,118,5,104,0,0,118,119,5,111,0,0,119,
	120,5,116,0,0,120,121,5,114,0,0,121,122,5,97,0,0,122,123,5,110,0,0,123,
	124,5,115,0,0,124,125,5,50,0,0,125,126,5,47,0,0,126,127,5,98,0,0,127,128,
	5,117,0,0,128,129,5,116,0,0,129,130,5,116,0,0,130,131,5,111,0,0,131,132,
	5,110,0,0,132,20,1,0,0,0,133,134,5,80,0,0,134,135,5,104,0,0,135,136,5,111,
	0,0,136,137,5,116,0,0,137,138,5,114,0,0,138,139,5,97,0,0,139,140,5,110,
	0,0,140,141,5,115,0,0,141,142,5,47,0,0,142,143,5,98,0,0,143,144,5,117,0,
	0,144,145,5,116,0,0,145,146,5,116,0,0,146,147,5,111,0,0,147,148,5,110,0,
	0,148,22,1,0,0,0,149,150,5,80,0,0,150,151,5,84,0,0,151,152,5,47,0,0,152,
	153,5,66,0,0,153,24,1,0,0,0,154,155,5,123,0,0,155,156,5,123,0,0,156,26,
	1,0,0,0,157,158,5,125,0,0,158,159,5,125,0,0,159,28,1,0,0,0,160,162,7,0,
	0,0,161,160,1,0,0,0,162,163,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,
	165,1,0,0,0,165,166,6,14,0,0,166,30,1,0,0,0,167,168,5,80,0,0,168,169,5,
	104,0,0,169,170,5,111,0,0,170,171,5,116,0,0,171,172,5,114,0,0,172,173,5,
	97,0,0,173,174,5,110,0,0,174,175,5,115,0,0,175,195,5,50,0,0,176,177,5,80,
	0,0,177,178,5,104,0,0,178,179,5,111,0,0,179,180,5,116,0,0,180,181,5,114,
	0,0,181,182,5,97,0,0,182,183,5,110,0,0,183,195,5,115,0,0,184,185,5,80,0,
	0,185,195,5,84,0,0,186,187,5,114,0,0,187,188,5,117,0,0,188,189,5,98,0,0,
	189,195,5,121,0,0,190,191,5,82,0,0,191,192,5,117,0,0,192,193,5,98,0,0,193,
	195,5,121,0,0,194,167,1,0,0,0,194,176,1,0,0,0,194,184,1,0,0,0,194,186,1,
	0,0,0,194,190,1,0,0,0,195,32,1,0,0,0,196,198,8,1,0,0,197,196,1,0,0,0,198,
	199,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,34,1,0,0,0,201,203,5,13,
	0,0,202,201,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,205,5,10,0,0,205,
	36,1,0,0,0,5,0,163,194,199,202,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoegirlLexer.__ATN) {
			MoegirlLexer.__ATN = new ATNDeserializer().deserialize(MoegirlLexer._serializedATN);
		}

		return MoegirlLexer.__ATN;
	}


	static DecisionsToDFA = MoegirlLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}