import {Component} from 'react'

import ColorGroup from './ColorGroup.js'
import ColorTemplate from './VimColorTemplate.js'
import Square from './Square.js'

import {getHighlightColor, getLabelColor, groups, samples, themes} from './constants.js'

class App extends Component {

  defaultTheme = 'defaultDark'

  initialState = {
    ...themes[this.defaultTheme],
    grpCursor: {fgCode: 0, bgCode: 15},
    activeSample: 'pmenu',
    filename: 'custom',
  }
  state = this.initialState

  displayLineNumber = (text, key, isCursorThere) => {
    let groupColor = isCursorThere ? this.state.grp9 : this.state.grp4
    if (text === '~') groupColor = this.state.grp3
    return <code key={key} style={{"backgroundColor": getHighlightColor(groupColor.bgCode), "color": getHighlightColor(groupColor.fgCode)}}>{text}</code>
  }

  displaySampleCode = (sample, autofillLineNr = true) => {
    let curLineNr = 0
    const lastLineNr = Number(Object.keys(sample[sample.length - 1])[0])
    const numDigit = (lastLineNr + '').length
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

  getBlankSquare = () => {
    return <Square backgroundcolor={'#fff'} fontcolor={'#fff'} value='x' borderDisable={true} />
  }

  getPaletteSquares = (from, to = from + 17) => {
    return Array(to - from + 1).fill(0).map((_, i) => {
        return <Square key={"square-" + from + i} backgroundcolor={getHighlightColor(from + i)} fontcolor={getLabelColor(from + i)} value={from + i} borderDisable={false} />
    })
  }

  insertLineNumberSpaces = (num, numDigit) => (' ' + String(num).padStart(numDigit, ' ') + ' ')

  setColor = (group, fgCode, bgCode) => {
    this.setState({
      [group]: {fgCode: fgCode, bgCode: bgCode},
    })
  }

  render() {
    return (
      <div className='container'>
        <table className='settings'>
          <thead>
            <tr>
              <th>Font</th>
              <th>BG</th>
              <th>Highlight Groups</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(x => {
              const grpNum = Object.keys(x)[0]
              return <ColorGroup key={'grp' + grpNum} id={grpNum} members={x[grpNum]} color={this.state[grpNum]} setColor={this.setColor} />
            })}
            <tr>
              <td></td>
              <td></td>
              <td>
                <label htmlFor="theme">Theme: </label>
                <select className='settings__theme' name="theme" value={this.state.theme} onChange={e => {this.setState(themes[e.target.value])}}>
                  <option value="defaultDark">DefaultDark</option>
                  <option value="defaultLight">DefaultLight</option>
                </select>

                <input className='settings__filename' type="text" name="filename" value={this.state.filename} size="12"
                  onChange={e => {
                    this.setState({filename: e.target.value})
                  }}/>
                <label htmlFor="filename">.vim</label>

                <a className='settings__download' href={'data:text/plain;charset=utf-8,' + encodeURIComponent(ColorTemplate(this.state))} download={this.state.filename + '.vim'}>Download</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><b>Note: 256 = Transparent</b></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td><b>* Reversed Font and BG Colors  ** Transparent Font Color</b></td>
            </tr>
          </tbody>
        </table>

        <div className='sample'>

          <div className='sample-code' style={{'backgroundColor': getHighlightColor(this.state.grp8.bgCode)}}>
            {this.displaySampleCode(samples[this.state.activeSample], this.state.activeSample === 'diff_error' ? false : true)}
          </div>

          <div className='sample-settings'>
            {
              ['pmenu','nerdtree_visual','fold_search','diff_error'].map((x, i) => {
                return <button key={i} className={'sample-settings__button' + (this.state.activeSample === x ? ' sample-settings__button--active' : '')} onClick={() => this.setState({activeSample: x})}>{['Pmenu','NERDTree & Visual', 'Fold & Search', 'Diff & Error'][i]}</button>
              })
            }
          </div>

        </div>

        <div className='logo'>
          <p className='logo__title'><a href="https://github.com/tkiat/vim-custom-theme"><b>Vim Custom Theme</b></a></p>
          <p className='logo__content'>A simple, opinionated tool to generate</p>
          <p className='logo__content'>a custom theme with real-time changes.</p>
          <p className='logo__content'>Currently support only 256 colors.</p>
          <p className='logo__footer' style={{'color': 'blue'}}><a href="https://reactjs.org/"><b>Made with React.js</b></a></p>
        </div>

        <div className='palette'>
          <div>{this.getPaletteSquares(16, 51)}</div>
          <div>{this.getPaletteSquares(52, 87)}</div>
          <div>{this.getPaletteSquares(88, 123)}</div>
          <div>{this.getPaletteSquares(124, 159)}{this.getPaletteSquares(15, 15)}</div>
          <div>{this.getPaletteSquares(160, 195)}{this.getPaletteSquares(14, 14)}</div>
          <div>{this.getPaletteSquares(196, 231)}{this.getPaletteSquares(13, 13)}</div>
          <div>{this.getPaletteSquares(232, 255)}{this.getPaletteSquares(0, 12)}</div>
        </div>

      </div>
    )
  }
}

export default App