/**
 * Created by YOU on 2017/8/1.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'
import './style'

interface AbstractInputProps {
  value?: string
  defaultValue?: string
  preFixCls?: string
  className?: string
  onPressEnter?: React.FormEventHandler<any>
  onKeyDown?: React.FormEventHandler<any>
  style?: React.CSSProperties
}

interface InputProps extends AbstractInputProps {
  id?: number | string
  placeholder?: string
  size?: 'small' | 'default' | 'large'
  type?: string
  disabled?: boolean
  readOnly?: boolean
  onKeyUp?: React.FormEventHandler<any>
  onClick?: React.FormEventHandler<any>
  onChange?: React.FormEventHandler<any>
  onFocus?: React.FormEventHandler<any>
  onBlur?: React.FormEventHandler<any>
}

class Input extends React.Component<InputProps, any> {
  static defaultProps = {
    preFixCls: 'bello-input',
    size: 'default',
    disabled: false,
  }

  static propTypes = {
    value: propTypes.string,
    defaultValue: propTypes.string,
    preFixCls: propTypes.string,
    className: propTypes.string,
    onPressEnter: propTypes.func,
    onKeyDown: propTypes.func,
    id: propTypes.oneOfType([propTypes.string, propTypes.number] as any),
    placeholder: propTypes.string,
    size: propTypes.oneOf(['small', 'default', 'large']),
    type: propTypes.string,
    disabled: propTypes.bool,
    readOnly: propTypes.bool,
    onKeyUp: propTypes.func,
    onClick: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
  }

  refs: {
    input: HTMLInputElement,
  }

  foucus () {
    this.refs.input.focus()
  }

  blur () {
    this.refs.input.blur()
  }

  handleKeyDown = (e: any) => {
    const {onKeyDown, onPressEnter} = this.props
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e)
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  render () {
    const {preFixCls, size, disabled} = this.props

    const otherProps = omit(this.props, ['preFixCls', 'size', 'onPressEnter', 'onKeyDown'])

    const className = classNames(preFixCls, {
      [`${preFixCls}-sm`]: size === 'small',
      [`${preFixCls}-lg`]: size === 'large',
      [`${preFixCls}-disabled`]: disabled,
    })

    return (
      <input
        {...otherProps}
        ref="input"
        onKeyDown={this.handleKeyDown}
        className={className}
        type="text"/>
    )
  }
}

export default Input