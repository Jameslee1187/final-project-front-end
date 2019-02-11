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
  }

  handleLogIn=(e, newUser)=>{
    e.preventDefault()
    this.getUser(newUser)
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
    if (user.result === "Failure"){
      alert("Username and/or Password is Incorrect.")
    }else{

      console.log(user);
      localStorage.setItem("token", user.jwt);
      localStorage.setItem("username", user.user.username)
      this.setState({
        user: user.user
      })
      this.props.history.push('/teams')
    }
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
    console.log(newUser.user.username);
    localStorage.setItem("token", newUser.jwt);
    localStorage.setItem("username", newUser.user.username);
    this.setState({
        user: newUser.user
    })
    this.props.history.push('/teams')
  })
  }

  render() {
    return (
      <div className="App">
          <div><NavBar/></div>
          <Route exact path="/" render={()=> <Home handleLogIn={this.handleLogIn}/>}/>
          <Route exact path="/teams" render={()=> <TeamContainer user={this.state.user}/>}/>
          <Route exact path="/article" component= {NewsDetail}/>
            <Route exact path="/news/:team" component= {NewsPage}/>
          <Route exact path="/signup" render={()=> <SignUp handleSignUp={this.handleSignUp}/>}/>
      </div>
    );
  }
}

export default withRouter(App);
