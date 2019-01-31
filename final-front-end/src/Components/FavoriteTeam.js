import React, { Component } from 'react';
import './FavoriteTeam.scss';

class FavoriteTeam extends Component {

  render() {
    let teams=this.props.favoriteTeams.map(team=>{
      return <p>{team}</p>
    })
    return (
      <div>
      <h1 className="title">Here is a list of your Favorite Teams</h1>
      <h2 className="click">Please click on a team to get it's news</h2>
      <p className="favoriteTeam"> {teams}</p>
      <button className="button">Click here to see to your list of favorite teams </button>

      </div>
    );
  }

}

export default FavoriteTeam;
