/**
 * Created by YOU on 2017/8/10.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'
import './test.styl'

interface TestProps {
  length?: number
  preFixCls?: string
}

class TEST extends React.Component<TestProps, any> {
  static defaultProps = {
    length: 4,
    preFixCls: 'bello-test',
  }
  static propTypes = {
    length: propTypes.number,
    preFixCls: propTypes.string,
  }

  static renderInputs (length: number, className: string) {
    const Inputs = []
    for (let i = 0; i < length; i++) {
      Inputs.push(<input className={className} ref={'input' + i} type="text"/>)
    }
    return Inputs
  }

  refs = {}

  constructor (props: TestProps) {
    super()
  }

  render () {
    const {length, preFixCls} = this.props
    const className = preFixCls
    const itemClassName = `${preFixCls}-item`
    return (
      <div className={className}>
        {
          TEST.renderInputs(length || 4, itemClassName)
        }
      </div>
    )
  }
}

export default TEST