import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NewsDetail.scss'
class NewsDetail extends Component {

  render() {
    return (
      <div>
      <p>
      <a href={this.props.article.url}>
      </a>
      </p>
      </div>
    );
  }

}

export default NewsDetail;
