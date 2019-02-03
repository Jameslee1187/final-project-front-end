import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import NewsPage from '../Components/NewsPage'
import FavoriteTeam from '../Components/FavoriteTeam'
class TeamContainer extends Component {

  state={
    teams: [],
    favoriteTeams: []
  }
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/teams")
    .then(res=>res.json())
    .then(teams=>{console.log(teams);
      this.setState({
        teams: teams.data
      })

    })
  }

  favoriteClick=(favTeam)=>{
    let newArr=[...this.state.favoriteTeams]
    if(!newArr.includes(favTeam)){
      newArr.push(favTeam)
    }
      this.setState({
      favoriteTeams: newArr
    })
  }

  render() {
    let teams = this.state.teams.map(team=>{
      return (<p onClick={()=> this.favoriteClick(team.name)} key={team.id}>{team.name}</p>)
    })
    return (
      <div>
        <FavoriteTeam history={this.props.history} favoriteTeams={this.state.favoriteTeams} handleClick={this.props.handleClick} team={this.props.team}/>
          <h2>Please Choose Your Favorite Teams</h2>
            {teams}
      </div>
    );
  }

}

export default TeamContainer;
