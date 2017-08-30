/**
 * Created by YOU on 2017/8/29.
 */
import React = require('react')
import propTypes = require('prop-types')
import classNames = require('classnames')
import {omit} from 'lodash'

interface FooterProps {
  filter: 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE',
  onFilterChange (filter: string): any,
}

class Footer extends React.Component<FooterProps, any> {
  static propsTypes = {
    filter: propTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE',
    ]).isRequired,
    onFilterChange: propTypes.func.isRequired,
  }

  props: FooterProps

  constructor (props: FooterProps) {
    super()
  }

  renderFilter (filter: string, name: string) {
    if (filter === this.props.filter) {
      return name
    }
    return (
      <a href="javascript:;" onClick={
        (e) => {
          e.preventDefault()
          this.props.onFilterChange(filter)
        }
      }>
        {name}
      </a>
    )
  }

  render () {
    return (
      <p>
        show:
        {this.renderFilter('SHOW_ALL', 'All')},
        {this.renderFilter('SHOW_COMPLETED', 'completed')},
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
      </p>
    )
  }
}

export default Footer