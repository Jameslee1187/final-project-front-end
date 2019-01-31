import React, { Component } from 'react';
import NewsPage from '../Components/NewsPage'
import FavoriteTeam from '../Components/FavoriteTeam'
class TeamContainer extends Component {

  state={
    teams: ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Bobcats", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Hornets", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia Sixers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"],
    favoriteTeams: []
  }

  favoriteClick=(favTeam)=>{
    let newArr=[...this.state.favoriteTeams]
    if(!newArr.includes(favTeam)){
      newArr.push(favTeam)
    }
      this.setState({
      favoriteTeams: newArr
    },console.log(this.state.favoriteTeams))
  }

  render() {
    let teams = this.state.teams.map(team=>{
      return <p onClick={()=> this.favoriteClick(team)}>{team}</p>
    })
    return (
      <div>
      <FavoriteTeam favoriteTeams={this.state.favoriteTeams}/>
          <h2>Please Choose Your Favorite Teams</h2>
            {teams}
      </div>
    );
  }

}

export default TeamContainer;
