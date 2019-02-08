import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import { Message } from 'semantic-ui-react'
import Home from './Components/Home'
import './Components/Home.scss'
import NavBar from './Components/NavBar'
import TeamContainer from './Containers/TeamContainer'
import NewsPage from './Components/NewsPage'
import NewsDetail from './Components/NewsDetail'
import SignUp from './Components/SignUp'
import './App.css'


class App extends Component {

  state={
    user: ''
  }

  handleSignUp=(e, newUser)=>{
    e.preventDefault()
    this.submitUser(newUser)
    this.props.history.push('/teams')
  }

  handleLogIn=(e, newUser)=>{
    e.preventDefault()
    this.getUser(newUser)
    this.props.history.push('/teams')
  }

  getUser=(newUser)=>{
    fetch("http://localhost:3000/api/v1/users/login",{
      method: 'POST',
    body: JSON.stringify({
      username: newUser.loginUserName,
      password: newUser.loginPassword
    }),
    headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  .then(res => res.json())
  .then(user => {
    console.log(user);
    localStorage.setItem("token", user.jwt);
    localStorage.setItem("username", user.user.username)
    this.setState({
        user: user.user
    })
  })
  }




  submitUser=(newUser)=>{
    fetch("http://localhost:3000/api/v1/users/signup",{
      method: 'POST',
    body: JSON.stringify(newUser),
    headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  .then(res => res.json())
  .then(newUser => {
    localStorage.setItem("token", newUser.jwt);
    this.setState({
        user: newUser.user
    })
  })
  }

  render() {
    return (
      <div className="App">
          <div><NavBar/></div>
          <Route exact path="/" render={()=> <Home handleLogIn={this.handleLogIn}/>}/>
          <Route exact path="/teams" render={()=> <TeamContainer/>}/>
          <Route exact path="/article" component= {NewsDetail}/>
          <Route exact path="/signup" render={()=> <SignUp handleSignUp={this.handleSignUp}/>}/>
      </div>
    );
  }
}

export default withRouter(App);
