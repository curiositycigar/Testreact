/**
 * Created by YOU on 2017/8/7.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'

interface AbstractSelectProps {
  preFix?: string
  className?: string
  size?: 'small' | 'default' | 'large'
}

interface SelectProps extends AbstractSelectProps {
  value?: string
}

class Select extends React.Component<SelectProps, any> {
  constructor (props: SelectProps) {
    super()
  }

  render () {
    return (
      <div/>
    )
  }
}

export default Select