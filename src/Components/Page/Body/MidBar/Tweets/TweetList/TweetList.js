import React, { Component } from 'react'
import List from '@material-ui/core/List'
import TweetItem from '../TweetItem/TweetItem'
import Tweet from '../Tweet/Tweet'
class TweetList extends Component {
  render () {
    return (
      <div>
        <List>
          {this.props.tweets.map((tweet, index) => {
            return <Tweet value={tweet} />
          })}
        </List>
      </div>
    )
  }
}

export default TweetList
