import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Clickbait from './Clickbait';
import AdHammer from './AdHammer';
import Article from './Article';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
        <main className="expanded row">
          <Article/>
          <AdHammer/>

          <Clickbait/>
      </main>

      <Footer/>
      </div>
    );
  }
}

export default App;
