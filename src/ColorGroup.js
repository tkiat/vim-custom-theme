import {Component} from 'react'

import Square from './Square.js'

class ColorGroup extends Component {
  initialState = {
    fgColor: '#ff0000',
    bgColor: '#00ff00',
  }
  state = this.initialState

  changeColor = (event) => {
    this.setState({
      fgColor: '#0000ff',
      bgColor: '#0000ff',
    })
  }

  render() {
    const { fgColor, bgColor } = this.state
    return (
      // <div style={{"pointerEvents": "none"}}>
      <div>
        <a onClick={this.changeColor}>
          <Square backgroundcolor={fgColor}/>
        </a>
        <a onClick={this.changeColor}>
          <Square backgroundcolor={bgColor}/>
        </a>
        <div>{this.props.members.map(x => <div>{x}</div>)}</div>
      </div>
    )
  }
}

export default ColorGroup
