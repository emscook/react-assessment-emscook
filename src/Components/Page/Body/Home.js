import React, { Component } from 'react'
import Features from './Features/Features'
import Intro from './Intro/Intro'
import Catalog from './Catalog/Catalog'
import Splash from './Splash/Splash'
class Home extends Component {
  render () {
    return (
      <section class='container has-navbar-fixed-top'>
        {this.props.value.map(ent => {
          if (ent.type === 'features') {
            return (
              <Features
                value={ent.children}
                title={ent.title}
                titleLink={ent.titleLink}
              />
            )
          } else if (ent.type === 'intro') {
            return <Intro value={ent.children} />
          } else if (ent.type === 'catalog') {
            return <Catalog value={ent.children} />
          } else if (ent.type === 'splash') {
            return <Splash value={ent} />
          }
        })}
      </section>
    )
  }
}
export default Home
