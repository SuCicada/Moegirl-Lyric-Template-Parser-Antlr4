grammar test;
lyricsKaiAttr
  : LYRICSKAI_ATTR_KEY '=' STRING
  ;

LYRICSKAI_ATTR_KEY : 'lstyle' ;


STRING : ~[= \r\n]+ ; // 匹配除 '=' 和换行符之外的任意字符
