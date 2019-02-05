import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import YoutubeBackground from 'react-youtube-background'

class Home extends Component {

  render() {
    return (
      <div >
        <div className="home-div">
          <h1 className='home-title'>Welcome to All in One Sports!</h1>
        </div>
        <form>
          Please Sign In<br/><br/>
        <input type="text" placeholder="username"/><br/>
        <input type="text" placeholder="password"/><br/><br/>
        <Button>Sign In</Button><br/><br/>
        <Button>New User? Sign Up!</Button>
        </form>
        <YoutubeBackground videoId={"3V6U8FrCrc0"} aspectRatio={"16:9"} overlay={"rgba(255,255,255,.5)"} className= {"video-background"}></YoutubeBackground>
      </div>
    );
  }

}

export default Home;
