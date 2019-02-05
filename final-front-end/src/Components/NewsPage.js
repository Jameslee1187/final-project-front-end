import React, { Component } from 'react';
import NewsDetail from './NewsDetail'
import {Link} from 'react-router-dom';
import { Input } from 'semantic-ui-react'
import './Newspage.scss'
class NewsPage extends Component {

  state={
    articles: [],
    article: {},
    search: '',
    articleSearch: []
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
        articles: articles.articles,
        articleSearch: articles.articles
      },()=>console.log(this.state.articles))
    })
  }

  handleArticleSearch=(e)=>{
    let newArr = [...this.state.articleSearch].filter(searching=>{
      return searching.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      search: e.target.value,
      article: newArr
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
      return (<a href={this.state.article.url}><div onClick={()=>this.handleArticle(article)}>
              <p >{article.title}</p>
              <img className= "sports-image" src={article.urlToImage} alt=''/>
            </div></a>)
    })
    return (
      <div>
        <Input className="news-search" onChange={(e)=>this.handleArticleSearch(e)} value={this.state.search} type='text' placeholder="Search for a keyword for an article"/>
        {articles}
        <NewsDetail article={this.state.article}/>
      </div>
    );
  }

}

export default NewsPage;
