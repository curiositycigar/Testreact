/**
 * Created by YOU on 2017/8/1.
 */
import React = require('react')
import ReactDom = require('react-dom')
import {
  Provider,
} from 'react-redux'
import {createStore} from 'redux'

class App extends React.Component<any, any> {
  state = {
    value: '123',
  }

  render () {
    return (
      <div>
        <div>{
          this.state.value
        }</div>
      </div>
    )
  }
}
ReactDom.render(<App/>, document.getElementById('root'))
