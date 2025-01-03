grammar Color;
import Photrans;

color
  : BRACKET_OPEN
  'color'
  '|' colorValue
  '|' NEWLINE*
   contentBlock+
   BRACKET_CLOSE
  ;
contentBlock
   : (otherwords | photrans | color | coloredlink) newline*
   ;

// {{Coloredlink|颜色|页面链接|欲显示文字}}
coloredlink:
  BRACKET_OPEN
  'coloredlink'
  '|' colorValue
   ('|' STRING )?
   ('|' STRING )?
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