import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon, List, Button } from 'semantic-ui-react';
import './FavoriteTeam.scss';

class FavoriteTeam extends Component {

  handleClick=(team)=>{
      console.log("hey",team)
    this.props.history.push(`/news/${team}`)
  }

  deleteTeam=(team)=>{

  }



  render() {
    console.log("favoriteTeams",this.props.favoriteTeams);
    let teams=this.props.favoriteTeams.map(team=>{
      return <Link to = {`/news/${team.name}`}>
              <List.Item style={{marginBottom: "10px", textAlign:"left", paddingLeft:"200px"}} className= 'basketball-line'>
                <List.Icon name='basketball ball' color='orange'/>
                <List.Content style={{"display": "inline-block"}}>
                  <List.Header style={{"display": "inline-block", "width": "300px"}}>{team.name}</List.Header>
                  <Button className="delete" onClick={()=>this.deleteTeam(team)} style={{"display": "inline-block", marginLeft: "10px"}}>Delete</Button>
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
