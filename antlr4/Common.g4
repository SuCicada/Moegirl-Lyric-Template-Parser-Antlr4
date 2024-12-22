grammar Common;

BRACKET_OPEN
  : '{{'
  ;
BRACKET_CLOSE
  : '}}'
  ;
WS : [ \t\r]+ -> skip ;
//WS : [ \t\r\n]+ -> skip ;


//VALUE:  (~["\n|{}=])+;


//VVV
//  :  (~["\n|{}=])+
//  ;
