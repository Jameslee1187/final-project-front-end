import React, { Component } from 'react';
import TeamContainer from './Containers/TeamContainer'
import YoutubeBackground from 'react-youtube-background'
import './App.css'


class App extends Component {
  state={
    articles: []
  }

  componentDidMount(){
    fetch("https://newsapi.org/v2/everything?q=celtics&from=2019-02-01&apiKey=0977269cbe4b49a09a909e5240074c6e")
    .then(res=>res.json())
    .then(articles=>{
      this.setState({
        articles: articles.articles
      })
    })


  }
  render() {
    console.log(this.state.articles);
    return (
      <div className="App">
        <YoutubeBackground
          videoId={"3V6U8FrCrc0"}     // default -> "jssO8-5qmag"
          aspectRatio={"16:9"} // default -> "16:9"
          overlay={"rgba(255,255,255,.5)"}       // defaults -> null | e.g. "rgba(0,0,0,.4)"
          className= {"video-background"}   // defaults -> null

          >
        </YoutubeBackground>
        <h1>Welcome to Team News from Different Websites!</h1>
        <TeamContainer/>
      </div>
    );
  }
}

export default App;
