/**
 * Created by YOU on 2017/8/1.
 */
import React = require('react')
import ReactDom = require('react-dom')
import Input from './components/Input'

const data = {
  value: 'test',
}

class App extends React.Component<any, any> {
  state: {value: string} = {
    value: '',
  }

  handleChange = (e: any) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    this.setState({value})
  }

  render () {
    return (
      <div>
        <Input onChange={this.handleChange} value={this.state.value} placeholder="输入数字"/><br/><br/>
        <Input defaultValue="small" size="small"/><br/><br/>
        <Input defaultValue="default"/><br/><br/>
        <Input defaultValue="large" size="large"/>
      </div>
    )
  }
}
ReactDom.render(<App/>, document.getElementById('root'))
