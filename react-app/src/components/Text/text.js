import Simple from '../simple/simple'
import './text.css'
const Text = (props) => {
  const { value, text } = props

  return (<div>
    <p>Hello World! {value}</p>
    <span>{text}</span>
    <Simple />
  </div>)
}

export default Text
