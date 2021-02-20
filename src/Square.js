import {Component} from 'react'

// class Square extends Component {
//   render() {
//     return (
//       <div className="square" style={{"background-color": "#ff0000"}}></div>
//     )
//   }
// }

const Square = (props) => {
  return (
    <div className="square" style={{"background-color": props.backgroundcolor, "color": props.fontcolor}}>{props.value}</div>
  )
}
export default Square
