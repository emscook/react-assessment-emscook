import React, { Component } from 'react'
import './Body.css'
import LeftBar from './LeftBar/LeftBar'
import RightBar from './RightBar/RightBar'
import { Switch, Route } from 'react-router-dom'
import MidBar from './MidBar/MidBar'
import Home from './Home'
class Body extends Component {
  render () {
    return (
      <div className='full-back-splash'>

        <Switch>
          {Object.keys(this.props.value.bodies).map(ent => {
            return (
              <Route
                exact
                path={this.props.value.url(ent)}
                render={() => <Home value={this.props.value.bodies[ent]} />}
              />
            )
          })}
        </Switch>
      </div>
    )
  }
}
export default Body
