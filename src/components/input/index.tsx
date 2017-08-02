/**
 * Created by YOU on 2017/8/1.
 */
import React = require('react')
import propTypes = require('prop-types')

let preFix = 'bello-input'

interface InputProps {
  value: string,
  type?: 'default' | 'small'
}

class Input extends React.Component<InputProps, any> {
  static propTypes = {
    value: propTypes.string,
    type: propTypes.oneOf(['default', 'small'])
  }

  constructor(props: InputProps) {
    super(props)
  }

  render() {
    return (
      <input className={`${preFix}-${this.props.type}`} type="text" value={this.props.value}/>
    )
  }
}

export default Input