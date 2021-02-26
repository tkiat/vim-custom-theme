const Square = (props) => {
  return (
    <div className={"palette__square" + (props.borderDisable ? " disable" : "")} style={{"backgroundColor": props.backgroundcolor, "color": props.fontcolor}}>{props.value}</div>
  )
}
export default Square
