import React, { Component } from 'react';
import './App.css';
import ArticleBody from './ArticleBody'
import Header from './Header'
import Clickbait from './Clickbait';
import AdHammer from './AdHammer';
import CommentsSection from './CommentsSection';
import ShareOptions from './ShareOptions';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <div className="avatar">
              <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
              <div className="author-info">
                <p className="author-name">By Domri, son of Flug</p>
                <p className="date">on 28 April, 3018 of the Third Age</p>
              </div>
            </div>
            <ArticleBody/>


            <div className="article-links">
              <CommentsSection/>
              <ShareOptions/>
            </div>
          </div>
          <AdHammer/>

          <Clickbait/>
      </main>

      <footer className="expanded row">
        <h6>&copy; 2017 Erebor Industries</h6>
        <h6 className="float-right">All rights reserved</h6>
      </footer>
      </div>
    );
  }
}

export default App;
