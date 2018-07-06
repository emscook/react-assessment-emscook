import React, { Component } from 'react'
import Brand from './Brand/Brand'
import Burger from './Burger/Burger'
import Menu from './Menu/Menu'
class Bar extends Component {
  render () {
    return (
      <nav class='navbar is-fixed-top hero is-info'>
        <div class='container'>
          <Brand value={this.props.value.brand} />
          <Burger value={this.props.value.burger} />
          <Menu value={this.props.value.menu} />
        </div>
      </nav>
    )
  }
}
export default Bar
