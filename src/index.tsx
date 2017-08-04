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
  state = {
    value: 'value',
    defaultValue: 'defaultValue'
  }

  render() {
    return (
      <div>
        <Input value={this.state.value}/>
        <Input defaultValue={this.state.defaultValue}/>
        <div>this is test!</div>
      </div>
    )
  }
}
ReactDom.render(<App/>, document.getElementById('root'))

// export default  App