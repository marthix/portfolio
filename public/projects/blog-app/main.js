import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post'

ReactDOM.render(
  <div>
    <Post title="My First Post" href="#Post1" src="http://unsplash.it/70/70?random" date="11/10/1989"/>
    <Post title="My Second Post" href="#Post2" src="http://unsplash.it/70/70?random" date="01/01/2000"/>
    <Post title="My Uncreative Title" href="#Post3" src="http://unsplash.it/70/70?random" date="05/19/2002"/>
    <Post title="My Final Post?" href="#Post4" src="http://unsplash.it/70/70?random" date="03/03/2008"/>
    <Post title="Titles R Hard" href="#Post5" src="http://unsplash.it/70/70?random" date="10/31/2015"/>
  </div>
  , document.getElementById('post'))
