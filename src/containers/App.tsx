/**
 * Created by YOU on 2017/8/29.
 */
import React = require('react')
import {connect} from 'react-redux'
import propTypes = require('prop-types')
import classNames = require('classnames')
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions'
import AddTodo from '../components/AddTodo'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'

interface AppProps {
  visibleTodos: Array<{text: string, completed: boolean}>
  visibilityFilter: 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'
  dispatch: any
}

class App extends React.Component<AppProps, any> {
  static propTypes = {
    visibleTodos: propTypes.arrayOf(propTypes.shape({
      text: propTypes.string.isRequired,
      completed: propTypes.bool.isRequired,
    }).isRequired).isRequired,
    visibilityFilter: propTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE',
    ]).isRequired,
  }

  props: AppProps

  constructor (props: AppProps) {
    super()
  }

  render () {
    const {dispatch, visibleTodos, visibilityFilter} = this.props
    return (
      <div>
        <AddTodo
          onAddClick={
            (text) => {
              dispatch(addTodo(text))
            }
          }
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={
            (index) => {
              dispatch(completeTodo(index))
            }
          }
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange={
            (nextFilter) => {
              dispatch(setVisibilityFilter(nextFilter))
            }
          }
        />
      </div>
    )
  }
}

interface Todo {
  completed: boolean
  filter (todo: Todo): boolean
}

function selectTodos (todos: Todo[], filter: string) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed)
  }
}

const select = (state: any) => {
  return {
    visibleTodos: selectTodos(state.todos, state.VisibilityFilter),
    visibilityFilter: state.VisibilityFilter,
  }
}

// 传递props并封装App

export default connect<any, any, any>(select)(App)