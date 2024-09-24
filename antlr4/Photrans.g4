grammar Photrans;
import Common;
photrans
  : BRACKET_OPEN tag '|' kanji '|' hiragana BRACKET_CLOSE
  ;

tag
  : 'Photrans2'
  | 'Photrans'
  | 'PT'
  | 'ruby'
  | 'Ruby'
  ;

kanji: STRING ;

hiragana: STRING ;

otherwords: STRING;

// 混杂的句子
sentence: (otherwords | photrans)+;

STRING: (~["\n|{}])+;
newline: NEWLINE ;
NEWLINE : '\r'? '\n' ;
