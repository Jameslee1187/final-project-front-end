import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewsPage from '../Components/NewsPage';
import FavoriteTeam from '../Components/FavoriteTeam';
import { Input } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import './TeamContainer.scss'

class TeamContainer extends Component {

  state={
    teams: [],
    favoriteTeams: [],
    searchedTeams: [],
    search: ""
  }

  handleSearch=(e)=>{
    e.preventDefault()
    
    let newArr = [...this.state.searchedTeams].filter(searched=>{
      return searched.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      search: e.target.value,
      teams: newArr
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/teams")
    .then(res=>res.json())
    .then(teams=>{console.log(teams);
      this.setState({
        teams: teams.data,
        searchedTeams: teams.data
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
      return (<div onClick={()=> this.favoriteClick(team.name)} key={team.id}>{team.name} </div>)
    })
    return (
      <div className= 'flex-parent'>
      <Grid  divided = 'vertically'>
        <Grid.Row columns = {2}>
          <Grid.Column>
            <h1 >Here is a list of your Favorite Teams</h1>
            <h2 >Please click on a team to get its news</h2>
            <FavoriteTeam history={this.props.history} favoriteTeams={this.state.favoriteTeams} handleClick={this.props.handleClick} team={this.props.team}/>
          </Grid.Column>
          <Grid.Column>
            <div >
              <h2>Please Choose Your Favorite Teams</h2>
              <Input onChange={(e)=>this.handleSearch(e)} type="text" placeholder="Enter a team name" value={this.state.search}/>
              {teams}
            </div>
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </div>
    );
  }

}

export default TeamContainer;
