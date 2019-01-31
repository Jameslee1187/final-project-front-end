import React, { Component } from 'react';
import TeamContainer from './Containers/TeamContainer'
import YoutubeBackground from 'react-youtube-background'
import './App.css'


class App extends Component {
  state={
    brnews: [],
    espnnews: [],
    foxnews: []
  }

  componentDidMount(){
    fetch("https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=0977269cbe4b49a09a909e5240074c6e")
    .then(res=>res.json())
    .then(brnews=>{
      this.setState({
        brnews: brnews.articles
      })
    })
    fetch("https://newsapi.org/v2/top-headlines?sources=espn&apiKey=0977269cbe4b49a09a909e5240074c6e")
    .then(res=>res.json())
    .then(espnnews=>{
      this.setState({
        espnnews: espnnews.articles
      })
    })
    fetch("https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=0977269cbe4b49a09a909e5240074c6e")
    .then(res=>res.json())
    .then(foxnews=>{
      this.setState({
        foxnews: foxnews.articles
      })
    })

  }
  render() {
    return (
      <div className="App">
        <YoutubeBackground
          videoId={"3V6U8FrCrc0"}     // default -> "jssO8-5qmag"
          aspectRatio={"16:9"} // default -> "16:9"
          overlay={"rgba(255,255,255,.5)"}       // defaults -> null | e.g. "rgba(0,0,0,.4)"
          className= {"video-background"}   // defaults -> null
          onReady={null}       // defaults -> null
          >
        </YoutubeBackground>
        <h1>Welcome to Team News from Different Websites!</h1>
        <TeamContainer/>
      </div>
    );
  }
}

export default App;
