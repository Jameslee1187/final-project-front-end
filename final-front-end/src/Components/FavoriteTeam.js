import React, { Component } from 'react';
import './FavoriteTeam.scss';

class FavoriteTeam extends Component {

  state={
    articles: []
  }


  handleClick=(team)=>{
      console.log(team)
      this.props.history.push(`/news/${team}`)
    // fetch(`https://newsapi.org/v2/everything?q=${team}&from=${today}&apiKey=0977269cbe4b49a09a909e5240074c6e`)
    // .then(res=>res.json())
    // .then(articles=>{
    //   this.setState({
    //     articles: articles.articles
    //   },console.log(this.state.articles))
    // })
  }


  render() {
    let teams=this.props.favoriteTeams.map(team=>{
      return <button onClick={()=>this.handleClick(team)}>{team}</button>
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
