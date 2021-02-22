const Square = (props) => {
  return (
    <div className="square" style={{"backgroundColor": props.backgroundcolor, "color": props.fontcolor}}>{props.value}</div>
  )
}
export default Square
