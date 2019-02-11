import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class NavBar extends Component {
  state = { activeItem: ' ' }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   logOut = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
   }

   checkLoggedIn=()=>{
         const { activeItem } = this.state
     if(!localStorage.token){
       return(
         <Link to ="/"><Menu.Item name='LogIn' active={activeItem ==='LogIn'}></Menu.Item></Link>
       )
     }else{
       return(
      <Segment inverted>
        <Menu inverted pointing secondary>
            <Link to="/"><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}/></Link>
            <Link to="/teams"><Menu.Item name='Teams' active={activeItem === 'Teams'} onClick={this.handleItemClick}/></Link>
          <Menu.Menu position = 'right'>
            <Link to ="/"><Menu.Item name='LogOut' active={activeItem ==='LogOut'} onClick={this.logOut}/></Link>
          </Menu.Menu>
        </Menu>
      </Segment>
      )
     }
   }
  render() {

    const { activeItem } = this.state
    return (



         this.checkLoggedIn()

    );
  }

}

export default NavBar;
