import React, { Component } from 'react';
import NewsDetail from './NewsDetail'
import {Link} from 'react-router-dom';
import { Input, Grid, Card, Image } from 'semantic-ui-react'
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
    e.preventDefault()
    console.log(e.target.value);
    let newArr = [...this.state.articleSearch].filter(searching=>{
      return searching.title.toLowerCase().includes(e.target.value.toLowerCase()) || searching.source.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log("titties", newArr);
    this.setState({
      search: e.target.value,
      articles: newArr
    })
  }

  handleArticle=(article)=>{
    this.setState({
      article: article
    })
  }

  render() {
    let articles = this.state.articles.map(article=>{
      console.log(article.title);
      return (<Grid.Column>
                <a href={this.state.article.url}>
                  <div onClick={()=>this.handleArticle(article)}>
                    <Card>
                      <Image fluid src={article.urlToImage} alt=''/>
                        <Card.Content>
                          <Card.Description>
                            <p>{article.title}</p>
                          </Card.Description>
                          <Card.Description>
                            <p>{article.source.name}</p>
                          </Card.Description>

                        </Card.Content>
                    </Card>
                  </div>
                  </a>
                </Grid.Column>)
    })
    return (
      <div>
        <Input fluid className="news-search" onChange={(e)=>this.handleArticleSearch(e)} value={this.state.search} type='text' placeholder="Search for a keyword for an article"/>
        <Grid>
          <Grid.Row columns={3}>
            {articles}
          </Grid.Row>
        </Grid>
        <NewsDetail article={this.state.article}/>
      </div>
    );
  }

}

export default NewsPage;
