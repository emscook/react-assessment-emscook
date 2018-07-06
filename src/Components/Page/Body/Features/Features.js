import React, { Component } from 'react'
class Features extends Component {
  render () {
    return (
      <div>
        <div class='intro column is-8 is-offset-2'>

          <h2 class='title'>
            <a href={this.props.titleLink} download>
              {this.props.title}
            </a>
          </h2>

        </div>
        <div class='columns features'>
          {this.props.value.map(ent => {
            return (
              <div className='column is-4'>
                <div className='card is-shady'>
                  <div className='card-image has-text-centered'>
                    <i className={ent.img} />
                  </div>
                  <div className='card-content'>
                    <div className='content'>
                      <h4>{ent.head}</h4>
                      {ent.body.map(someEntry => {
                        if (someEntry.head) {
                          return (
                            <div>
                              <p>
                                <h6>{someEntry.head}</h6>

                                {someEntry.body.map(eggo => (
                                  <li>
                                    {eggo}
                                  </li>
                                ))}
                              </p>
                            </div>
                          )
                        } else {
                          return someEntry.body.map(eggo => (
                            <p>
                              {eggo}
                            </p>
                          ))
                        }
                      })}

                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default Features
