import React, { Component } from 'react';
import NewsDetail from './NewsDetail'
import './Newspage.scss'
class NewsPage extends Component {

  state={
    articles: [],
    article: {}
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
    fetch(`https://newsapi.org/v2/everything?language=en&q=${this.props.match.params.team}&from=${today}&apiKey=0977269cbe4b49a09a909e5240074c6e`)
    .then(res=>res.json())
    .then(articles=>{
      this.setState({
        articles: articles.articles
      },()=>console.log(this.state.articles))
    })
  }

  handleArticle=(article)=>{
    this.setState({
      article: article
    })
  }
  render() {
    let articles = this.state.articles.map(article=>{
      console.log(article.content);
      return (<div onClick={()=>this.handleArticle(article)}>
              <p >{article.title}</p>
              <img className= "sports-image" src={article.urlToImage} alt=''/>
            </div>)
    })
    return (
      <div>
        {articles}
        <NewsDetail article={this.state.article}/>
      </div>
    );
  }

}

export default NewsPage;
