import React, { Component } from 'react';

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
      <form onSubmit={(e)=>this.props.handleSignUp(e, this.state)}>
        Please Fill Out The Form<br/><br/>
      <input onChange={(e)=>this.handleChange(e)} type="text" placeholder="Username" name='username' value={this.state.username}/><br/>
      <input onChange={(e)=>this.handleChange(e)} type="text" placeholder="Password" name='password' value={this.state.password}/><br/><br/>
      <button>Submit</button>
      </form>
      </div>
    );
  }

}

export default SignUp;
