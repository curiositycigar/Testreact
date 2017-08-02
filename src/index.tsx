/**
 * Created by YOU on 2017/8/1.
 */
import React = require('react')
import ReactDom = require('react-dom')
import Input from './components/input'

class App extends React.Component {
  render() {
    return (
      <div>
        <Input value="123"/>
        <div>this is test!</div>
      </div>
    )
  }
}
ReactDom.render(<App/>, document.getElementById('root'))

// export default  App