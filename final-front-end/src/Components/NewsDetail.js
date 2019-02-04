import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NewsDetail.scss'
class NewsDetail extends Component {

  render() {
    return (
      <div>
    <Link to ={`article/${this.props.article}`}><iframe title= {this.props.article.url} className="new-page" src={this.props.article.url}/></Link>
      </div>
    );
  }

}

export default NewsDetail;
