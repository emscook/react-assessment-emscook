import React, { Component } from 'react'
class Catalog extends Component {
  render () {
    return (
      <div class='rows features-two'>
        {this.props.value.map(ent => {
          return (
            <div className='row is-4'>
              <div className='card columns is-shady is-vcentered '>
                <div className='card-image'>
                  <i className={`${ent.img} `} />
                </div>
                <div className='card-content'>
                  <div className='content'>
                    <h4>{ent.head}</h4>
                    {ent.body.map(someEntry => {
                      if (someEntry.head) {
                        return (
                          <p>
                            <h6>{someEntry.head}</h6>

                            {someEntry.body.map(eggo => (
                              <li>
                                {eggo}
                              </li>
                            ))}
                          </p>
                        )
                      } else {
                        return someEntry.body.map(eggo => (
                          <p>
                            {eggo}
                          </p>
                        ))
                      }
                    })}
                    <a href={ent.gitLink}>
                      {ent.gitText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Catalog
