import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { List } from 'semantic-ui-react';
import './FavoriteTeam.scss';

class FavoriteTeam extends Component {



  handleClick=(team)=>{
      console.log("hey",team)
    this.props.history.push(`/news/${team}`)

  }


  render() {
    let teams=this.props.favoriteTeams.map(team=>{
      console.log("hello",team);
      return <Link to = {`/news/${team}`}><List.Item>{team}</List.Item></Link>
    })


    return (

      <div>
      <List className="favoriteTeam"> {teams}</List>
      </div>
    );
  }

}

export default FavoriteTeam;
