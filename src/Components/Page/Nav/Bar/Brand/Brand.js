import React, { Component } from 'react'
class Brand extends Component {
  render () {
    return (
      <div class='navbar-brand'>
        <a class='navbar-item' href='../'>
          <a href=''>{this.props.value.text}</a>
        </a>
      </div>
    )
  }
}
export default Brand
