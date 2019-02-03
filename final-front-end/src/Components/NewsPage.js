import React, { Component } from 'react';

class NewsPage extends Component {
  state={
    articles: []
  }
  componentDidMount(){

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      today = yyyy + '-' + mm + '-' + dd;
    fetch(`https://newsapi.org/v2/everything?q=${this.props.match.params.team}&from=${today}&apiKey=0977269cbe4b49a09a909e5240074c6e`)
    .then(res=>res.json())
    .then(articles=>{
      this.setState({
        articles: articles.articles
      },()=>console.log(this.state.articles))
    })
  }
  render() {
    let articles = this.state.articles.map(article=>{
      return <p>{article.title}</p>
    })
    return (
      <div>
        {articles}
      </div>
    );
  }

}

export default NewsPage;
