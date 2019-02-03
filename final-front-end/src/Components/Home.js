import React, { Component } from 'react';
import YoutubeBackground from 'react-youtube-background'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to All in One Sports!</h1>
        <form>
          Please Sign In<br/><br/>
        <input type="text" placeholder="username"/><br/>
        <input type="text" placeholder="password"/><br/><br/>
        <button>Submit</button><br/><br/>
        <button>New User? Sign Up!</button>
        </form>

        <YoutubeBackground videoId={"3V6U8FrCrc0"} aspectRatio={"16:9"} overlay={"rgba(255,255,255,.5)"} className= {"video-background"}></YoutubeBackground>
      </div>
    );
  }

}

export default Home;
