import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import './Components/Home.scss'
import NavBar from './Components/NavBar'
import TeamContainer from './Containers/TeamContainer'
import FavoriteTeam from './Components/FavoriteTeam'
import NewsPage from './Components/NewsPage'
import NewsDetail from './Components/NewsDetail'
import './App.css'


class App extends Component {

  render() {
    return (
      <div className="App">
          <div><NavBar/></div>
          <Route exact path="/" component= {Home}/>
          <Route exact path="/teams" component= {TeamContainer}/>
          <Route exact path="/news/:team" component= {NewsPage}/>
          <Route exact path="/article" component= {NewsDetail}/>
      </div>
    );
  }
}

export default App;
