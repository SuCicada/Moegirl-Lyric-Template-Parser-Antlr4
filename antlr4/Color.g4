grammar Color;
import Photrans;

color
  : BRACKET_OPEN
  'color'
  '|' colorValue
  '|' sentence
   BRACKET_CLOSE
  ;

colorValue: STRING;

//color_content
//  : (sentence)+
//  ;
colorBlock
  : BRACKET_OPEN
  'color_block'
  '|' colorValue
   BRACKET_CLOSE
//   STRING
  ;