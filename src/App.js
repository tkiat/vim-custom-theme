import {Component} from 'react'

import CodeSample from './CodeSample.js'
import ColorGroup from './ColorGroup.js'
import Square from './Square.js'

import {getHighlightColor, getLabelColor, samples} from './constants.js'

const themes = {
  theme1: {
    grp1: {fgCode: 214, bgCode: 256},
    grp2: {fgCode: 149, bgCode: 256},
    grp3: {fgCode: 67, bgCode: 256},
    grp4: {fgCode: 245, bgCode: 256},
    grp5: {fgCode: 123, bgCode: 256},
    grp6: {fgCode: 205, bgCode: 256},
    grp7: {fgCode: 75, bgCode: 256},
    grp8: {fgCode: 15, bgCode: 233},
    grp9: {fgCode: 245, bgCode: 236},
    grp10: {fgCode: 0, bgCode: 252},
    grp11: {fgCode: 0, bgCode: 245},
    grp12: {fgCode: 15, bgCode: 9},
    grp13: {fgCode: 0, bgCode: 214},
    grp14: {fgCode: 0, bgCode: 166},
  }
}

    // grp15: {fgCode: 0, bgCode: 15}, // cursor
class App extends Component {

  initialState = {...themes.theme1, grpCursor: {fgCode: 0, bgCode: 15}, sample: 'pmenu', curLineNr: 11}
  // initialState['cursor'] = {fgCode: 0, bgCode: 15}
  state = this.initialState

  getPaletteSquares = (from, to = from + 17) => {
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

  insertLineNumberSpaces = (num, numDigit) => (' ' + String(num).padStart(numDigit, ' ') + ' ')

  displaySampleCodeOneLine = (seq) => {
    return [
      seq.map(pair => {
        let {bgCode, fgCode} = this.state['grp' + pair[0]]
        bgCode = pair[2] ? this.state['grp' + pair[2]].bgCode : bgCode
        return <code style={{"backgroundColor": getHighlightColor(bgCode), "color": getHighlightColor(fgCode)}}>{pair[1]}</code>
      })
    ]}

  displayLineNumber = (lineNr,numDigit) => {
    return <code style={{"backgroundColor": getHighlightColor(this.state.grp4.bgCode), "color": getHighlightColor(this.state.grp4.fgCode)}}>{this.insertLineNumberSpaces(lineNr, numDigit)}</code>
  }

  displaySampleCode = (sample) => {
    let cur = 0
    const lastLineNr = Number(Object.keys(sample[sample.length - 1])[0])
    let numDigit = Math.ceil(sample.length / 10)
    return <pre className='sample-code'>{
      sample.map(line => {
        const lineNr = Number(Object.keys(line)[0])
        const seq = Object.values(line)[0]
        let newlines = []
        while(cur < lineNr) { newlines.push(<br />); cur++ }
        return [
          newlines,
          (lineNr > 0 && lineNr < lastLineNr) && this.displayLineNumber(lineNr, numDigit),
          this.displaySampleCodeOneLine(seq)
        ]
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
        <table className='highlight-groups'>
          <thead>
            <tr>
              <th>Font</th>
              <th>BG</th>
              <th>Highlight Groups</th>
            </tr>
          </thead>
          <tbody>
            <ColorGroup id="grp1" members={["Constant", "Directory"]} color={this.state.grp1} setColor={this.setColor} />
            <ColorGroup id="grp2" members={["Statement"]} color={this.state.grp2} setColor={this.setColor} />
            <ColorGroup id="grp3" members={["Nontext", "Specialkey"]} color={this.state.grp3} setColor={this.setColor} />
            <ColorGroup id="grp4" members={["Comment", "LineNr"]} color={this.state.grp4} setColor={this.setColor} />
            <ColorGroup id="grp5" members={["Type"]} color={this.state.grp5} setColor={this.setColor} />
            <ColorGroup id="grp6" members={["Special"]} color={this.state.grp6} setColor={this.setColor} />
            <ColorGroup id="grp7" members={["Identifier", "Preproc"]} color={this.state.grp7} setColor={this.setColor} />
            <ColorGroup id="grp8" members={['ModeMsg', 'Normal', 'Question', 'TabLineFill', 'Title']} color={this.state.grp8} setColor={this.setColor} />
            <ColorGroup id="grp9" members={["CursorLine", "CursorLineNr", "Folded"]} color={this.state.grp9} setColor={this.setColor} />
            <ColorGroup id="grp10" members={["Pmenu", "PmenuSbar", "StatusLine", "StatusLineTerm", "TablineSel", "Visual"]} color={this.state.grp10} setColor={this.setColor} />
            <ColorGroup id="grp11" members={["PmenuThumb", "PmenuSel", "StatusLineNC", "StatusLineTermNC", "TabLine"]} color={this.state.grp11} setColor={this.setColor} />
            <ColorGroup id="grp12" members={["DiffDelete", "Error", "ErrorMsg"]} color={this.state.grp12} setColor={this.setColor} />
            <ColorGroup id="grp13" members={["DiffAdd", "DiffChange", "IncSearch", "MatchParen", "Search"]} color={this.state.grp13} setColor={this.setColor} />
          </tbody>
      TODO: change to vim license, tell 256 transparent
        </table>

        <div className='editor' style={{'backgroundColor': getHighlightColor(this.state.grp8.bgCode)}}>
      {/*
          <code className='editor__tab' style={{'backgroundColor': getHighlightColor(this.state.grp8.bgCode)}}>
            {this.drawHlLineOfTexts([[6,' 2',11],[11,' NERD_tree_1  s/Code.js '],[10, ' index.html '],[11, ' s/App.js '],[8,'                  ']])}
          </code>

          <div className='editor__lineNumber' style={{'backgroundColor': getHighlightColor(this.state.grp4.bgCode), 'color': getHighlightColor(this.state.grp4.fgCode)}}>
            {Array(25).fill(0).map((_, i) => {
              const lineNr = i + 1
              console.log(lineNr == this.state.curLineNr)
              const fgColor = (lineNr === this.state.curLineNr) ? getHighlightColor(this.state.grp9.fgCode) : 'inherit'
              return <div key={'linenr' + lineNr} style={{'color': fgColor}}><code>{lineNr}</code></div>
            })}
          </div>
      */}

          <div className='editor__code'>
            {this.displaySampleCode(samples[this.state.sample])}
          </div>

      {/*
          <code className='editor__footer' style={{'backgroundColor': getHighlightColor(this.state.grp8.bgCode)}}>
            {this.drawHlLineOfTexts([[8,' "index.html" 16L, 355B written                                   ']])}
          </code>
      */}

          <div className='editor__selector'>
            <button>NERDTree</button>
            <button onClick={() => this.setState({sample: 'pmenu'})}>Pmenu</button>
            <button onClick={() => this.setState({sample: 'visual'})}>Visual</button>
            <button>Search</button>
            <button>Diff</button>
          </div>
        </div>


        <div className='editor__palette'>
          <div>{this.getPaletteSquares(0, 15)}</div>
          <div>{this.getPaletteSquares(16, 51)}</div>
          <div>{this.getPaletteSquares(52, 87)}</div>
          <div>{this.getPaletteSquares(88, 123)}</div>
          <div>{this.getPaletteSquares(124, 159)}</div>
          <div>{this.getPaletteSquares(160, 195)}</div>
          <div>{this.getPaletteSquares(196, 231)}</div>
          <div>{this.getPaletteSquares(232, 255)}</div>
        </div>
      </div>
    )
  }
}
export default App