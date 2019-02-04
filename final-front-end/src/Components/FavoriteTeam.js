import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './FavoriteTeam.scss';

class FavoriteTeam extends Component {



  handleClick=(team)=>{
      console.log(team)
    this.props.history.push(`/news/${team}`)

  }


  render() {
    let teams=this.props.favoriteTeams.map(team=>{
      return <Link to = {`/news/${team}`}>{team}</Link>
    })


    return (

      <div>
      <h1 className="title">Here is a list of your Favorite Teams</h1>
      <h2 className="click">Please click on a team to get it's news</h2>
      <div className="favoriteTeam"> {teams}</div>


      </div>
    );
  }

}

export default FavoriteTeam;
