import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon, List,  } from 'semantic-ui-react';
import './FavoriteTeam.scss';

class FavoriteTeam extends Component {



  handleClick=(team)=>{
      console.log("hey",team)
    this.props.history.push(`/news/${team}`)

  }


  render() {
    let teams=this.props.favoriteTeams.map(team=>{
      console.log("hello",team);
      return <Link to = {`/news/${team}`}>
              <List.Item>
                <List.Icon name='basketball ball' color='orange'/>
                <List.Content>
                  <List.Header>{team}</List.Header>
                </List.Content>
              </List.Item>
            </Link>
    })


    return (

      <div>
      <List animated verticalAlign='middle'>
        {teams}
      </List>
      </div>
    );
  }

}

export default FavoriteTeam;
