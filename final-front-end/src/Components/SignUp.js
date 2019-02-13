import React, { Component } from 'react';
import {Button, CheckBox, Form} from 'semantic-ui-react'
import YoutubeBackground from 'react-youtube-background'
import {Link} from 'react-router-dom';
import './SignUp.scss'

class SignUp extends Component {

  state={
    username:'',
    password:''
  }

  handleChange=(e)=>{
    e.preventDefault()
    this.setState({
    [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <div>
        <YoutubeBackground videoId={"QGuYep0cSAY"} aspectRatio={"16:9"} overlay={"rgba(255,255,255,.5)"} className= {"video-background"}></YoutubeBackground>
      <div>
      <div className="forms">
        <Form onSubmit={(e)=>this.props.handleSignUp(e, this.state)}>
          <Form.Field >
        Please Enter Your Desired Username and Password <br/><br/>
            <input onChange={(e)=>this.handleChange(e)} type="text" placeholder="Username" name='username' value={this.state.username}/><br/>
            <input onChange={(e)=>this.handleChange(e)} type="password" placeholder="Password" name='password' value={this.state.password}/><br/><br/>
            <Button>Submit</Button><br/><br/>
              <Link to='/'><Button>Already Have An Account? Sign In!</Button></Link>

          </Form.Field>
      </Form>
      </div>
      </div>
      </div>
    );
  }

}

export default SignUp;
