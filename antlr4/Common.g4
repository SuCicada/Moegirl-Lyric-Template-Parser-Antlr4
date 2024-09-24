grammar Common;

BRACKET_OPEN
  : '{{'
  ;
BRACKET_CLOSE
  : '}}'
  ;
WS : [ \t\r]+ -> skip ;


//VALUE:  (~["\n|{}=])+;


//VVV
//  :  (~["\n|{}=])+
//  ;
