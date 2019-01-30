import React, { Component } from 'react';

class TeamContainer extends Component {

  state={
    teams: ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Bobcats", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Hornets", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia Sixers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"]
  }

  render() {
    let teams = this.state.teams.map(team=>{
      return <p>{team}</p>
    })
    return (
      <div>
      <h1>Welcome to Team News from Different Websites!</h1>
      <h2>Please Click on A Team You Would Like To Get News From</h2>
      {teams}
      </div>
    );
  }

}

export default TeamContainer;
