// Create a new React component called Post.
// As properties, it should take a headline, a headline link, a post date, and a thumbnail image URL.

import React from 'react'

var imgStyle = {
  float: 'left',
  marginRight: '20px'
}

class Post extends React.Component {
  render() {
    return <div>
      <img style={imgStyle} src={this.props.src} />
      <h2><a href={this.props.href}>{this.props.title}</a></h2>
      <h4>{this.props.date}</h4>
    </div>
  }
}

export default Post
