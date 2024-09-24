grammar Moegirl;
import Common
  , Photrans
  , Color
  , Other
;

world
  :
    (photransButton NEWLINE)?
    oneLine*
   lyricsKai?
  ;

lyricsKai
  :
  BRACKET_OPEN 'LyricsKai'
  ('|' lyricsKaiAttr NEWLINE?)*
  lyricsKaiOriginal
  lyricsKaiTranslated?
  BRACKET_CLOSE;

lyricsKaiAttr
  : STRING
  ;
lyricsKaiOriginal
  :  '|original=' NEWLINE oneLine+
  ;
lyricsKaiTranslated
  :  '|translated=' NEWLINE oneLine+
  ;

//KEY:[a-zA-Z_][a-zA-Z_0-9]*;
//LYRICSKAI_ATTR_KEY : 'lstyle' | 'rstyle'|KEY ;

oneLine
  :
  (otherwords | photrans | color
    | colorBlock
    )+ (newline+|EOF)
  ;



