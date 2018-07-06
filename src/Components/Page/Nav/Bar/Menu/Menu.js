import React, { Component } from 'react'
class Menu extends Component {
  // <a href=''>Links</a>
  render () {
    return (
      <div id='navbarMenu' class='navbar-menu'>
        <div class='navbar-end'>
          <div class='tabs is-right'>
            <ul>
              {this.props.value.sections.map(ent => {
                return <a href={ent.ref}>{ent.title}</a>
              })}

            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Menu
