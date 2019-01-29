import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state={
    brnews: [],
    espnnews: []
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

  }
  render() {
    console.log(this.state.espnnews);
    return (
      <div className="App">
        </div>
    );
  }
}

export default App;
