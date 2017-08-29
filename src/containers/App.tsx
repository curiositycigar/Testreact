/**
 * Created by YOU on 2017/8/29.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'
import {connect} from 'react-redux'
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions'
import AddTodo from '../components/AddTodo'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'

interface AppProps {
  visibleTodos: Array<{text: string, completed: boolean}>
  visibilityFilter: 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'
}

class App extends React.Component<AppProps, any> {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div/>
    )
  }
}

export default App