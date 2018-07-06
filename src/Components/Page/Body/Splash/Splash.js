import React, { Component } from 'react'
class Splash extends Component {
  render () {
    return (
      <div class='intro rows is-8 is-offset-2'>
        <div>
          <h2 className='title'>
            <div className='rows '>
              <div>
                {this.props.value.logOne}
              </div>
              <div>
                {this.props.value.headOne}
              </div>
              <div>
                {
                  <img
                    src={this.props.value.img}
                    alt='Description'
                    width='33%'
                  />
                }
              </div>
              <div>
                {this.props.value.headTwo}
              </div>
              <div>
                {this.props.value.logTwo}
              </div>
            </div>
          </h2>
        </div>
      </div>
    )
  }
}
export default Splash
