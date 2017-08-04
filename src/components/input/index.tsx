/**
 * Created by YOU on 2017/8/1.
 */
import React = require('react')
import propTypes = require('prop-types')
import {omit} from 'lodash'

interface InputProps {
  defaultValue?: string
  value?: string
  size?: 'small' | 'default' | 'large'
  preFixCls?: string
  onPressEnter?: React.FormEventHandler<any>
  onKeyDown?: React.FormEventHandler<any>
  onKeyUp?: React.FormEventHandler<any>
  onClick?: React.FormEventHandler<any>
  onChange?: React.FormEventHandler<any>
  onBlur?: React.FormEventHandler<any>
  onFocus?: React.FormEventHandler<any>
}

class Input extends React.Component<InputProps, any> {
  static propTypes = {
    defaultValue: propTypes.string,
    value: propTypes.string,
    type: propTypes.oneOf(['default', 'small']),
    preFixCls: propTypes.string
  }

  static defaultProps = {
    preFixCls: 'bello-input',
    size: 'default'
  }

  handleKeyDown(e: any) {
    const {onKeyDown, onPressEnter} = this.props
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e)
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  getClassNames() {
  }

  refs: {
    input: HTMLInputElement
  }

  render() {
    const otherProps = omit(this.props, ['preFixCls', 'size', 'onPressEnter', 'onKeyDown'])
    return (
      <div>
        <input
          {...otherProps}
          ref="input"
          onKeyDown={this.handleKeyDown}
          className={this.props.preFixCls}
          type="text"/>
      </div>
    )
  }
}

export default Input