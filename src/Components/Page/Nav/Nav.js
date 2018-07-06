import React, { Component } from 'react'
import './Nav.css'
// import Nav from './components/Nav/Nav.js'
import Bar from './Bar/Bar'
class Nav extends Component {
  render () {
    return (
      <section class='hero is-info is-medium is-bold'>
        <div class='hero-head'>
          <Bar value={this.props.value.bar} />
        </div>
      </section>
    )
  }
}
export default Nav
