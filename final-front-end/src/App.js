import React, { Component } from 'react';
import TeamContainer from './Containers/TeamContainer'


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
    console.log(this.state.foxnews);
    return (
      <div className="App">
      <TeamContainer/>
      </div>
    );
  }
}

export default App;
