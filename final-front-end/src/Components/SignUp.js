import React, { Component } from 'react';
import {Button, CheckBox, Form} from 'semantic-ui-react'
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
      <Form onSubmit={(e)=>this.props.handleSignUp(e, this.state)}>
        Please Enter Your Desired Username and Password <br/><br/>
      <input onChange={(e)=>this.handleChange(e)} type="text" placeholder="Username" name='username' value={this.state.username}/><br/>
      <input onChange={(e)=>this.handleChange(e)} type="password" placeholder="Password" name='password' value={this.state.password}/><br/><br/>
      <Button>Submit</Button>
      </Form>
      </div>
    );
  }

}

export default SignUp;
