import {getHighlightColor} from './constants.js'

const drawHlLineOfTexts = (pairs) => {
  return <pre className='sample-code'>{
    pairs.map(pair => {
      let {bgCode, fgCode} = this.state['grp' + pair[0]]
      bgCode = pair[2] ? this.state['grp' + pair[2]].bgCode : bgCode
      return <code style={{"backgroundColor": getHighlightColor(bgCode), "color": getHighlightColor(fgCode)}}>{pair[1]}</code>
    })
  }</pre>
}
const Code = (props) => {
  return <code className='sample-code' style={{"backgroundColor": getHighlightColor(props.color.bgCode), "color": getHighlightColor(props.color.fgCode)}}>{props.value}</code>
              {this.drawHlLineOfTexts([[4,'<!DOCTYPE html>'],[3,'$']])}
              {this.drawHlLineOfTexts([[7,'<'],[2,'html'],[15,' '],[5,'lang'],[7,'='],[1,'"en"'],[7,'>'],[3,'$']])}
              {this.drawHlLineOfTexts([[7,'<'],[2,'head'],[7,'>'],[3,'$']])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'<'],[2,'meta'],[15,' '],[5,'charset'],[7,'='],[1,'"UTF-3"'],[7,'>'],[3,'$']])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'<'],[15,'title>Document</title'],[7,'>'],[3,'$']])}
              {this.drawHlLineOfTexts([[7,'</'],[2,'head'],[7,'>'],[3,'$']])}
              {this.drawHlLineOfTexts([[7,'<'],[2,'body'],[7,'>'],[3,'$']])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'<'],[15,'div id="message">Hello World!</div'],[7,'>'],[3,'$']])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'<'],[2,'script'],[7,'>'],[3,'$']])}
              {this.drawHlLineOfTexts([[15,'    '],[5,'document'],[6,'.getElementById'],[15,'("message").innerHTML = "Goodbye!"'],[3,'$']])}
              {this.drawHlLineOfTexts([[15,'    ',9],[5,'document',9],[6,'.getElementById',9],[15,'($                                      ',9]])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'</'],[2,'script'],[7,'>'],[3,'$'],[10,' getElementById(        ']])}
              {this.drawHlLineOfTexts([[7,'</'],[2,'body'],[7,'>'],[3,'$'],[15,'    '],[11,' getElementByClassName( ']])}
              {this.drawHlLineOfTexts([[15,'            '],[10,' getElementByName(      ']])}
              {this.drawHlLineOfTexts([[15,'            '],[10,' getElementByTagName(   ']])}
              {this.drawHlLineOfTexts([[15,'            '],[10,' getElementByTagNameNS( ']])}
}
export default Code
