/**
 * Created by YOU on 2017/8/9.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'

interface Props {
  width?: number
}

class MagicBlock extends React.Component<Props, any> {
  state = {}

  constructor (props: Props) {
    super()
  }

  render () {
    return (
      <div/>
    )
  }
}

export default MagicBlock