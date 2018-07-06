import React, { Component } from 'react'
class Intro extends Component {
  render () {
    return (
      <div class='intro column is-8 is-offset-2'>
        {this.props.value.map(ent => {
          console.log(ent.img)
          return (
            <div>
              <h2 class='title'>{ent.title}</h2>
              <img src={ent.img} alt='Description' width='33%' />
              <p class='subtitle'>
                {ent.subtitle}

              </p>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Intro
