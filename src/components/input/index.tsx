/**
 * Created by YOU on 2017/8/1.
 */
import React = require('react')
import propTypes = require('prop-types')

interface InputProps {
  defaultValue?: string
  value?: string,
  type?: 'default' | 'small'
}

class Input extends React.Component<InputProps, any> {
  static propTypes = {
    defaultValue: propTypes.string,
    value: propTypes.string,
    type: propTypes.oneOf(['default', 'small'])
  }

  state: { date: any, id?: number } = {
    date: new Date()
  }

  constructor(props: InputProps) {
    super(props)
  }

  componentDidMount() {
    this.state.id = setInterval(() => this.setState({date: new Date()}), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.state.id as number)
  }

  render() {
    return (
      <div>
        <span>{this.state.date.toUTCString()}</span>
      </div>
    )
  }
}

export default Input