import {Component} from 'react'

import Code from './Code.js'
import Square from './Square.js'
import ColorGroup from './ColorGroup.js'

import {getHighlightColor, getLabelColor} from './constants.js'

const themes = {
  theme1: {
    grp1: {fgCode: 214, bgCode: 256},
    grp2: {fgCode: 149, bgCode: 256},
    grp3: {fgCode: 15, bgCode: 233},
    grp4: {fgCode: 245, bgCode: 256},
    grp5: {fgCode: 123, bgCode: 256},
    grp6: {fgCode: 205, bgCode: 256},
    grp7: {fgCode: 75, bgCode: 256},
    grp8: {fgCode: 167, bgCode: 256},
    grp9: {fgCode: 245, bgCode: 236},
    grp10: {fgCode: 0, bgCode: 252},
    grp11: {fgCode: 0, bgCode: 245},
    grp12: {fgCode: 15, bgCode: 1},
    grp13: {fgCode: 0, bgCode: 214},
    grp14: {fgCode: 0, bgCode: 166},
    grp15: {fgCode: 0, bgCode: 1}, // TODO group
  }
}

class App extends Component {

  initialState = themes.theme1
  state = this.initialState

  getPaletteSquares = (from, to = from + 17, fontcolor="#000") => {
    return Array(to - from + 1).fill(0).map((_, i) => {
        return <Square key={"square-" + from + i} backgroundcolor={getHighlightColor(from + i)} fontcolor={getLabelColor(from + i)} value={from + i} borderDisable={false} />
    })
  }

  getBlankSquare = () => {
    return <Square backgroundcolor={'#fff'} fontcolor={'#fff'} value='x' borderDisable={true} />
  }

  // draw text with highlights. Arguments: [pair1, pair2, ...]
  // A pair is [<highlight group number>, <text>, <(optional) another group number, alternate background>]
  drawHlLineOfTexts = (pairs) => {
    return <pre className='sample-code'>{
      pairs.map(pair => {
        let {bgCode, fgCode} = this.state['grp' + pair[0]]
        bgCode = pair[2] ? this.state['grp' + pair[2]].bgCode : bgCode
        return <code style={{"backgroundColor": getHighlightColor(bgCode), "color": getHighlightColor(fgCode)}}>{pair[1]}</code>
      })
    }</pre>
  }

  setColor = (group, fgCode, bgCode) => {
    this.setState({
      [group]: {fgCode: fgCode, bgCode: bgCode},
    })
  }

  render() {
    return (
      <div>
        <table className='lefthalf'>
          <thead>
            <tr>
              <th>Font</th>
              <th>BG</th>
              <th>Highlight Groups</th>
            </tr>
          </thead>
          <tbody>
            <ColorGroup id="grp1" members={["Boolean", "Directory", "Float", "Number", "String"]} color={this.state.grp1} setColor={this.setColor} />
            <ColorGroup id="grp2" members={["Conditional", "Exception", "Label", "Repeat", "Statement"]} color={this.state.grp2} setColor={this.setColor} />
            <ColorGroup id="grp3" members={['Normal', 'Operator', 'Question', 'ModeMsg']} color={this.state.grp3} setColor={this.setColor} />
            <ColorGroup id="grp4" members={["Content", "Delimiter", "EndOfBuffer", "LineNr"]} color={this.state.grp4} setColor={this.setColor} />
            <ColorGroup id="grp5" members={["Keyword", "Type", "Typedef", "StorageClass", "Stucture"]} color={this.state.grp5} setColor={this.setColor} />
            <ColorGroup id="grp6" members={["Special"]} color={this.state.grp6} setColor={this.setColor} />
            <ColorGroup id="grp7" members={["Function", "Identifier", "Preproc"]} color={this.state.grp7} setColor={this.setColor} />
            <ColorGroup id="grp8" members={["Nontext", "Specialkey"]} color={this.state.grp8} setColor={this.setColor} />
            <ColorGroup id="grp9" members={["CursorLine", "CursorLineNr"]} color={this.state.grp9} setColor={this.setColor} />
            <ColorGroup id="grp10" members={["Pmenu", "StatusLineTerm", "TablineSel", "Visual", "PmenuSbar", "StatusLine"]} color={this.state.grp10} setColor={this.setColor} />
            <ColorGroup id="grp11" members={["PmenuThumb", "PmenuSel", "StatusLineTermNC", "TabLine", "StatusLineNC"]} color={this.state.grp11} setColor={this.setColor} />
            <ColorGroup id="grp12" members={["Error", "ErrorMsg"]} color={this.state.grp12} setColor={this.setColor} />
            <ColorGroup id="grp13" members={["Search"]} color={this.state.grp13} setColor={this.setColor} />
            <ColorGroup id="grp14" members={["IncSearch", "MatchParen"]} color={this.state.grp14} setColor={this.setColor} />
          </tbody>
        </table>

        <div className='righthalf'>
          <code className='righthalf__tab'>
            {this.drawHlLineOfTexts([[6,' 2',11],[11,' NERD_tree_1  s/Code.js '],[10, ' index.html '],[11, ' s/App.js '],[15,'               ']])}
          </code>

          <div className='righthalf__lineNumber' style={{'backgroundColor': getHighlightColor(this.state.grp4.bgCode), 'color': getHighlightColor(this.state.grp4.fgCode)}}>
            {Array(25).fill(0).map((_, i) => {
              const fgColor = (i === 10) ? getHighlightColor(this.state.grp9.fgCode) : 'inherit'
              return <div key={'linenr' + i} style={{'color': fgColor}}><code>{i}</code></div>
            })}
          </div>

          <div className='righthalf__code'>
              {this.drawHlLineOfTexts([[4,'<!DOCTYPE html>'],[8,'$']])}
              {this.drawHlLineOfTexts([[7,'<'],[2,'html'],[15,' '],[5,'lang'],[7,'='],[1,'"en"'],[7,'>'],[8,'$']])}
              {this.drawHlLineOfTexts([[7,'<'],[2,'head'],[7,'>'],[8,'$']])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'<'],[2,'meta'],[15,' '],[5,'charset'],[7,'='],[1,'"UTF-8"'],[7,'>'],[8,'$']])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'<'],[15,'title>Document</title'],[7,'>'],[8,'$']])}
              {this.drawHlLineOfTexts([[7,'</'],[2,'head'],[7,'>'],[8,'$']])}
              {this.drawHlLineOfTexts([[7,'<'],[2,'body'],[7,'>'],[8,'$']])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'<'],[15,'div id="message">Hello World!</div'],[7,'>'],[8,'$']])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'<'],[2,'script'],[7,'>'],[8,'$']])}
              {this.drawHlLineOfTexts([[15,'    '],[5,'document'],[6,'.getElementById'],[15,'("message").innerHTML = "Goodbye!"'],[8,'$']])}
              {this.drawHlLineOfTexts([[15,'    ',9],[5,'document',9],[6,'.getElementById',9],[15,'($                                      ',9]])}
              {this.drawHlLineOfTexts([[15,'  '],[7,'</'],[2,'script'],[7,'>'],[8,'$'],[10,' getElementById(        ']])}
              {this.drawHlLineOfTexts([[7,'</'],[2,'body'],[7,'>'],[8,'$'],[15,'    '],[11,' getElementByClassName( ']])}
              {this.drawHlLineOfTexts([[15,'            '],[10,' getElementByName(      ']])}
              {this.drawHlLineOfTexts([[15,'            '],[10,' getElementByTagName(   ']])}
              {this.drawHlLineOfTexts([[15,'            '],[10,' getElementByTagNameNS( ']])}
          </div>

          <code className='righthalf__footer'>
            {this.drawHlLineOfTexts([[15,' "index.html" 16L, 355B written'],[15,'        TODO   ']])}
          </code>
        </div>

        <div className='color-palette'>
          <div>{this.getPaletteSquares(16, 51)}{this.getBlankSquare()}{this.getPaletteSquares(0, 7)}</div>
          <div>{this.getPaletteSquares(52, 87)}{this.getBlankSquare()}{this.getPaletteSquares(8, 15)}</div>
          <div>{this.getPaletteSquares(88, 123)}</div>
          <div>{this.getPaletteSquares(124, 159)}{this.getBlankSquare()}{this.getPaletteSquares(232, 239)}</div>
          <div>{this.getPaletteSquares(160, 195)}{this.getBlankSquare()}{this.getPaletteSquares(240, 247)}</div>
          <div>{this.getPaletteSquares(196, 231)}{this.getBlankSquare()}{this.getPaletteSquares(248, 255)}</div>
        </div>
      TODO: change to vim license
      </div>
    )
  }
}

export default App
//           <pre className='righthalf__code'>
//             <code>
//             <Code color={this.state.grp1} value='printf(dfdfddfd)' /><Code color={this.state.grp2} value='printf(dfdfddfd)' />
//             <Code color={this.state.grp3} value='printf(dfdfddfd)    ' />
//               <Code color={this.state.grp2} value='0321032130' />
//               <Code color={this.state.grp7} value='0321032130' />
//             </code>
//           </pre>