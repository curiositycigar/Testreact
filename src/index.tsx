/**
 * Created by YOU on 2017/8/1.
 */
import React = require('react')
import ReactDom = require('react-dom')
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import ContainerApp from './containers/App'
import todoApp from './reducers'

const store = createStore(todoApp)

class App extends React.Component<any, any> {
  constructor (props: any) {
    super()
  }

  render () {
    return (
      <Provider store={store}>
        <ContainerApp />
      </Provider>
    )
  }
}
ReactDom.render(<App/>, document.getElementById('root'))
