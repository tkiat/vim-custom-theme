import {Component} from 'react'

import ColorTemplate from './VimColorTemplate.js'
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
  }
}

class App extends Component {

  initialState = {
    ...themes.theme1,
    grpCursor: {fgCode: 0, bgCode: 15},
    activeSample: 'pmenu',
    filename: 'custom'
  }
  state = this.initialState

  getPaletteSquares = (from, to = from + 17) => {
    return Array(to - from + 1).fill(0).map((_, i) => {
        return <Square key={"square-" + from + i} backgroundcolor={getHighlightColor(from + i)} fontcolor={getLabelColor(from + i)} value={from + i} borderDisable={false} />
    })
  }

  getBlankSquare = () => {
    return <Square backgroundcolor={'#fff'} fontcolor={'#fff'} value='x' borderDisable={true} />
  }

  insertLineNumberSpaces = (num, numDigit) => (' ' + String(num).padStart(numDigit, ' ') + ' ')

  // draw text with highlights. Arguments: [pair1, pair2, ...]
  // A pair is [<highlight group number, append r for reverse highlighting>, <text>, <(optional) another group number, alternate background>]
  displaySampleCodeOneLine = (seq) => {
    return [
      seq.map((pair, i) => {
        let {bgCode, fgCode} = this.state['grp' + (typeof pair[0] === 'string' ? pair[0] : Math.abs(pair[0]))]
        if (pair[0] < 0) { let temp = bgCode; bgCode = fgCode; fgCode = temp }
        bgCode = pair[2] ? this.state['grp' + pair[2]].bgCode : bgCode
        return <code key={i} style={{"backgroundColor": getHighlightColor(bgCode), "color": getHighlightColor(fgCode)}}>{pair[1]}</code>
      })
    ]}

  displayLineNumber = (text, key, isCursorThere) => {
    let groupColor = isCursorThere ? this.state.grp9 : this.state.grp4
    if (text === '~') groupColor = this.state.grp3
    return <code key={key} style={{"backgroundColor": getHighlightColor(groupColor.bgCode), "color": getHighlightColor(groupColor.fgCode)}}>{text}</code>
  }

  displaySampleCode = (sample, autofillLineNr = true) => {
    let curLineNr = 0
    const lastLineNr = Number(Object.keys(sample[sample.length - 1])[0])
    const secondLastLineNr = Number(Object.keys(sample[sample.length - 2])[0])
    let numDigit = Math.ceil((lastLineNr + '').length)
    return <pre className='sample-code'>{
      sample.map(line => {
        const lineNr = Number(Object.keys(line)[0])
        const seq = Object.values(line)[0]
        let newlines = []
        while(curLineNr < lineNr) {
          newlines.push(<br key={'br' + curLineNr} />)
          if (autofillLineNr) {
            let lineNumberText = '~'
            if (curLineNr >= lastLineNr - 2) lineNumberText = ''
            else if (curLineNr === lineNr - 1) lineNumberText = this.insertLineNumberSpaces(curLineNr + 1, numDigit)
            newlines.push(this.displayLineNumber(lineNumberText, 'lineNr' + curLineNr, seq.filter(x => x[0] === 'Cursor').length))
          }
          curLineNr++
        }
        return [
          newlines,
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
            <ColorGroup id="grp9" members={["CursorLine **", "CursorLineNr *", "Folded", "FoldColumn"]} color={this.state.grp9} setColor={this.setColor} />
            <ColorGroup id="grp10" members={["Pmenu", "PmenuSbar", "StatusLine", "StatusLineTerm", "TablineSel", "Visual"]} color={this.state.grp10} setColor={this.setColor} />
            <ColorGroup id="grp11" members={["PmenuThumb", "PmenuSel", "StatusLineNC", "StatusLineTermNC", "TabLine"]} color={this.state.grp11} setColor={this.setColor} />
            <ColorGroup id="grp12" members={["DiffDelete", "Error", "ErrorMsg"]} color={this.state.grp12} setColor={this.setColor} />
            <ColorGroup id="grp13" members={["DiffAdd", "DiffChange", "IncSearch *", "MatchParen *", "Search"]} color={this.state.grp13} setColor={this.setColor} />
            <tr>
              <td></td>
              <td></td>
              <td><b>256 = Transparent // TODO theme</b></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><b>* Reversed Font and BG Colors  ** Transparent Font Color</b></td>
            </tr>
          </tbody>
        </table>

        <div className='editor'>

          <div className='editor__code' style={{'backgroundColor': getHighlightColor(this.state.grp8.bgCode)}}>
            {this.displaySampleCode(samples[this.state.activeSample], this.state.activeSample === 'diff_error' ? false : true)}
          </div>

          <div className='sample-selector'>
            {
              ['pmenu','nerdtree_visual','fold_search','diff_error'].map((x, i) => {
                return <button key={i} className={'sample-selector__button' + (this.state.activeSample === x ? ' sample-selector__button--active' : '')} onClick={() => this.setState({activeSample: x})}>{x}</button>
              })
            }

            <input className='sample-download__input' type="text" name="filename" value={this.state.filename} size="12" 
              onChange={e => {
                this.setState({filename: e.target.value})
              }}/>
            <label htmlFor="filename">.vim</label>
            <a className='sample-selector__download' href={'data:text/plain;charset=utf-8,' + encodeURIComponent(ColorTemplate(this.state))} download={this.state.filename + '.vim'}>Download</a>
          </div>
        </div>

        <div className='color-palette'>
          <div>{this.getPaletteSquares(16, 51)}</div>
          <div>{this.getPaletteSquares(52, 87)}</div>
          <div>{this.getPaletteSquares(88, 123)}</div>
          <div>{this.getPaletteSquares(124, 159)}</div>
          <div>{this.getPaletteSquares(160, 195)}</div>
          <div>{this.getPaletteSquares(196, 231)}</div>
          <div>{this.getPaletteSquares(232, 255)}{this.getPaletteSquares(0, 15)}</div>
        </div>

        <div className='logo'>
          <p className='logo__title'><a href="https://github.com/tkiat/vim-custom-theme"><b>VIM Custom Theme</b></a></p>
          <p className='logo__content'>A simple, opinionated tool to generate</p>
          <p className='logo__content'>a custom theme with real-time changes.</p>
          <p className='logo__content'>Currently support only console 256 colors.</p>
          <p className='logo__footer' style={{'color': 'blue'}}><a href="https://reactjs.org/"><b><u>Made with React.js</u></b></a></p>
        </div>
      </div>
    )
  }
}

export default App