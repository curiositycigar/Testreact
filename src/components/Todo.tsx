/**
 * Created by YOU on 2017/8/29.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'

interface TodoProps {
  text: string
  completed: boolean
  onClick (e: any)
}

class Todo extends React.Component<TodoProps, any> {
  static propTypes = {
    text: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired,
    onClick: propTypes.func.isRequired,
  }

  props: TodoProps

  constructor (props: TodoProps) {
    super()
  }

  render () {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer',
        }}
      >
        {this.props.text}
      </li>
    )
  }
}

export default Todo