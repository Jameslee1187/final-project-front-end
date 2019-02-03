import React, { Component } from 'react';
import './NewsDetail.scss'
class NewsDetail extends Component {

  render() {
    return (
      <div>
    <iframe className="new-page" src={this.props.article.url}/>
      </div>
    );
  }

}

export default NewsDetail;
