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

interface SelectProps {
  value?: string
}

class Select extends React.Component<any, any> {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div/>
    )
  }
}