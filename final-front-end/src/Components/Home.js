import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import YoutubeBackground from 'react-youtube-background'
import {Link} from 'react-router-dom';
import SignUp from './SignUp'

class Home extends Component {

  state={
    loginUserName:'',
    loginPassword:''
  }

  handleChange=(e)=>{
    e.preventDefault()
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  logInShowUp=()=>{
    if(localStorage.length === 0){
      return (<div >
        <div className="home-div">
          <h1 className='home-title'>Welcome to All in One Sports!</h1>
        </div>
          <h2>Please Sign In</h2><br/><br/>
      <form onSubmit={(e)=>this.props.handleLogIn(e, this.state)}>
          <input onChange={(e)=>this.handleChange(e)} type="text" placeholder="Username" name='loginUserName' value={this.state.loginUserName}/><br/>
          <input onChange={(e)=>this.handleChange(e)} type="text" placeholder="Password" name='loginPassword' value={this.state.loginPassword}/><br/><br/>
          <Button>Submit</Button><br/><br/>
        </form>

        <Link to='/signup'><Button>New User? Sign Up!</Button></Link>
        <YoutubeBackground videoId={"3V6U8FrCrc0"} aspectRatio={"16:9"} overlay={"rgba(255,255,255,.5)"} className= {"video-background"}></YoutubeBackground>
      </div>)
    }else{
      return(
        <div>
          <h1>Enjoy the Show</h1>
          <YoutubeBackground videoId={"3V6U8FrCrc0"} aspectRatio={"16:9"} overlay={"rgba(255,255,255,.5)"} className= {"video-background"}></YoutubeBackground>
        </div>
      )
    }
  }

  render() {

    return (
      this.logInShowUp()
    );
  }

}

export default Home;
