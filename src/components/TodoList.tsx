/**
 * Created by YOU on 2017/8/29.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'
import Todo from './Todo'

interface TodoListProps {
  todos: Array<{text: string, completed: boolean}>,
  onTodoClick (index: number): any,
}

class TodoList extends React.Component<TodoListProps, any> {
  static propTypes = {
    todos: propTypes.arrayOf(propTypes.shape({
      text: propTypes.string.isRequired,
      completed: propTypes.bool.isRequired,
    }).isRequired).isRequired,
    onTodoClick: propTypes.func.isRequired,
  }

  props: TodoListProps

  constructor (props: TodoListProps) {
    super()
  }

  render () {
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return (<Todo
            {...todo}
            key={index}
            onClick={this.props.onTodoClick(index)}/>)
        })}
      </ul>
    )
  }
}

export default TodoList