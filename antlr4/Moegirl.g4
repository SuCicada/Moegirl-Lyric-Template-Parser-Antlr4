grammar Moegirl;
import Common
  , Photrans
  , Color
  , Other
//  , LyricsKaiLexer
;

//options { tokenVocab=LyricsKaiLexer; }

world
  :
  (photransButton )? NEWLINE*
  (oneLineContent)*
  NEWLINE*
  lyricsKai?
  ;

lyricsKai
  :
  BRACKET_OPEN 'LyricsKai'
  (NEWLINE* '|' lyricsKaiAttr )*

  NEWLINE* lyricsKaiOriginal
//  NEWLINE*

  (lyricsKaiTranslated  )?

  BRACKET_CLOSE
  ;

lyricsKaiAttr
  : STRING
  ;

lyricsKaiOriginal
  :  '|original='
//      block
  oneLineContent+
  ;
lyricsKaiTranslated
  :  '|translated='
//      block
  oneLineContent+
  ;

//KEY:[a-zA-Z_][a-zA-Z_0-9]*;
//LYRICSKAI_ATTR_KEY : 'lstyle' | 'rstyle'|KEY ;
//block:
//  (oneLineContent  )+
//  ;
//block1:
//  (BRACKET_OPEN ('lj|' | 'lang|zh|')
////    oneLineContent
////    oneLine+
//  lyricsLines
//  BRACKET_CLOSE)
//
//  | lyricsLines
//  ;

//lyricsLines:
//  oneLineContent
//  oneLine+
//  (oneLineContent  )+
//;

//oneLine:
//  newline* oneLineContent EOF?
//;

template_Lj:
  (BRACKET_OPEN ('lj|' | 'lang|zh|')
  //    oneLineContent
  //    oneLine+
//    lyricsLines
//    block
    oneLineContent+
    BRACKET_CLOSE)
    ;

oneLineContent:
     otherwords
    | photrans
    | color
    | colorBlock
    | template_Lj
    | newline
  ;


