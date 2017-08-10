/**
 * Created by YOU on 2017/8/10.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'

interface TestProps {
  length?: number
}

class TEST extends React.Component<any, any> {
  static defaultProps = {
    length: 4,
  }

  static renderInputs (length) {
    let Inputs
    for (let i = 0; i < length; i++) {
      Inputs += <input ref={'input' + i} type="text"/>
    }
  }

  refs = {}

  constructor (props: TestProps) {
    super()
  }

  render () {

    return (
      <div>
        {
          TEST.renderInputs(this.props.length)
        }
      </div>
    )
  }
}