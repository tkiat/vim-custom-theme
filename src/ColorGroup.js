import {Component} from 'react'

import Square from './Square.js'

import {getHighlightColor, getLabelColor} from './constants.js'

class ColorGroup extends Component {

  handleChange = (event) => {
    const {name, value} = event.target
    const colorCode = isNaN(value) ? 256 : Math.min(Math.max(0, value), 256)
    if (name === 'fgCode')
      this.props.setColor(this.props.id, colorCode, this.props.color.bgCode)
    else if (name === 'bgCode')
      this.props.setColor(this.props.id, this.props.color.fgCode, colorCode)
  }

  render() {
    return (
      <tr className='settings__row'>
        {Object.keys(this.props.color).map(x => {
          return <td key={"input-" + x}>
            <input
              className='settings__input'
              type="text"
              value={this.props.color[x]}
              name={x}
              style={{'backgroundColor': getHighlightColor(this.props.color[x]), 'color': getLabelColor(this.props.color[x])}}
              onChange={this.handleChange} />
          </td>
        })}
        <td className='settings__dscp'>
          {this.props.members.map((x, i) => <span key={"hl-" + x}><b>{i === 0 ? '' : ' - '}</b>{x}</span>)}
        </td>
      </tr>
    )
  }
}
export default ColorGroup
