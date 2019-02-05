import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NewsDetail.scss'
class NewsDetail extends Component {

  render() {
    return (
      <div>
      <p>
      <a href={this.props.article.url}>
      Fallback link if the page isn't rendering
      </a>
      </p>
      </div>
    );
  }

}

export default NewsDetail;
