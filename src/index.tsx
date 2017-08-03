/**
 * Created by YOU on 2017/8/1.
 */
import React = require('react')
import ReactDom = require('react-dom')
import Input from './components/input'

const data = {
  value: 'test'
}

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Input value={new Date().toUTCString()}/>
        <div>this is test!</div>
      </div>
    )
  }
}
ReactDom.render(<App/>, document.getElementById('root'))

// export default  App