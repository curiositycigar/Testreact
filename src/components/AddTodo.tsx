/**
 * Created by YOU on 2017/8/28.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'

interface AddTodoProps {
  onAddClick (text: string): any
}

class AddTodo extends React.Component<AddTodoProps, any> {
  static propTypes = {
    onAddClick: propTypes.func.isRequired,
  }

  props: AddTodoProps

  refs: {
    input: HTMLInputElement,
  }

  constructor (props: AddTodoProps) {
    super()
  }

  handleClick (e: any) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }

  render () {
    return (
      <div>
        <input type="text" ref="input"/>
        <button onClick={this.handleClick.bind(this)}>
          Add
        </button>
      </div>
    )
  }
}

export default AddTodo