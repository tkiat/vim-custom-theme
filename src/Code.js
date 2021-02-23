import {getHighlightColor} from './constants.js'

const Code = (props) => {
  return <code className='sample-code' style={{"backgroundColor": getHighlightColor(props.color.bgCode), "color": getHighlightColor(props.color.fgCode)}}>{props.value}</code>
}
export default Code
