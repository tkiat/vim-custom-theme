import {Component} from 'react'

const Square = (props) => {
  return (
    <div className="square" style={{"background-color": props.backgroundcolor, "color": props.fontcolor}}>{props.value}</div>
  )
}
export default Square
