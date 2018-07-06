import React, { Component } from 'react'
import './Tweets.css'
// import Tweets from './components/Tweets/Tweets.js'

import Card from '@material-ui/core/Card'
import TweetList from './TweetList/TweetList'
import TweetInput from './TweetInput/TweetInput'
class Tweets extends Component {
  render () {
    return (
      <Card>
        <TweetList tweets={this.props.value.listings} />
      </Card>
    )
  }
}
export default Tweets
