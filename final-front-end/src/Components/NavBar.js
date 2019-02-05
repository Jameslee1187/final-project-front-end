import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class NavBar extends Component {
  state = { activeItem: 'Home' }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
        const { activeItem } = this.state
    return (


      <Segment inverted>
       <Menu inverted pointing secondary>
         <Link to="/"><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}/></Link>
         <Link to="/teams"><Menu.Item name='Teams' active={activeItem === 'Teams'} onClick={this.handleItemClick}/></Link>
         <Link to="/news/:team"><Menu.Item name='News' active={activeItem === 'News'} onClick={this.handleItemClick}/></Link>
       </Menu>
     </Segment>
    );
  }

}

export default NavBar;
