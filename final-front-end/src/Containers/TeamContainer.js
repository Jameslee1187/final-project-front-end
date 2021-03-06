import React, { Component } from 'react';
import FavoriteTeam from '../Components/FavoriteTeam';
import { Input, Grid, List, Button } from 'semantic-ui-react';
import './TeamContainer.scss'

class TeamContainer extends Component {

  state={
    teams: [],
    favoriteTeams: [],
    searchedTeams: [],
    search: "",
    team: {}
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
    console.log(`Bearer ${localStorage.getItem("token")}`)
    fetch("http://localhost:3000/api/v1/teams")
    .then(res=>res.json())
    .then(teams=>{
      console.log(teams);
      this.setState({
        teams: teams.data,
        searchedTeams: teams.data
      })
    })
    fetch("http://localhost:3000/api/v1/favorites",{
    headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
  .then(res=>res.json())
  .then(arrayOfFavoritedTeamsFromTheBackEnd=>{
    console.log(arrayOfFavoritedTeamsFromTheBackEnd);
    let newArr= arrayOfFavoritedTeamsFromTheBackEnd
    let origArr=[...this.state.teams].filter(team=>{
      return !arrayOfFavoritedTeamsFromTheBackEnd.find(favorite=>{
        return favorite.name === team.name
      })
    })
    this.setState({
      favoriteTeams: newArr,
      teams: origArr
    })
  })
  }

  favoriteClick=(favTeam)=>{

    fetch("http://localhost:3000/api/v1/favorites",{
      method: 'POST',
      body: JSON.stringify({
        team_id: favTeam.id
      }),
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
  .then(res=>res.json())
  .then(fav=>{
    let newArr=[...this.state.favoriteTeams, fav.team]
    let origArr=[...this.state.teams].filter(team=>{
      return team.name !== fav.team.name
    })
    this.setState({
      favoriteTeams: newArr,
      teams: origArr
    })
  })
  }

  deleteTeam = (clickedTeam, e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/favorites/${clickedTeam.id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res=>res.json())
    .then(deletes=>console.log(deletes))
    console.log(clickedTeam.name);
    let otherTeams = [...this.state.teams, clickedTeam]
    otherTeams.sort(function(a,b){
      let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB){
          return -1
        }
        if (nameA > nameB){
          return 1
        }
        return 0
      })
    console.log(otherTeams);
    let deletedTeam = this.state.favoriteTeams.filter(team=>{
      return team.name !== clickedTeam.name

    })
    this.setState({
      favoriteTeams: deletedTeam,
      teams: otherTeams

    })
  }


  render() {
    let teams = this.state.teams.map(team=>{
      return (
        <List.Item style={{"cursor": "pointer"}}>
          <List.Content
            style={{"display": "inline-block","position":"relative"}}
            onClick={()=> this.favoriteClick(team)} key={team.id}>
            <List.Icon
              name='hand point right icon' />
            <List.Header
              style={{"display": "inline-block", "padding-right": "0", "width": "300px"}}>
              {team.name}
            </List.Header>
          </List.Content>
        </List.Item>)
    })
    return (
      <div className= 'flex-parent'>
      <Grid  divided = 'vertically'>
        <Grid.Row columns = {2}>
          <Grid.Column>
            <h1 >Here is a list of your Favorite Teams</h1>
            <h2 >Please click on a team to get its news</h2>
            <FavoriteTeam history={this.props.history} favoriteTeams={this.state.favoriteTeams} handleClick={this.props.handleClick} team={this.props.team} deleteTeam={this.deleteTeam}/>
          </Grid.Column>
          <Grid.Column>
            <div>
              <h1>Welcome {localStorage.getItem("username")}</h1>
              <h2>Please Choose Your Favorite Teams</h2>
              <div>
                <Input onChange={(e)=>this.handleSearch(e)} type="text" placeholder="Enter a team name" value={this.state.search}/>
              </div>
              <div>
                <List animated verticalAlign='middle'>
                  {teams}
                </List>
              </div>
            </div>
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </div>
    );
  }

}

export default TeamContainer;
