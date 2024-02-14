
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog';

function App() {
  return (
    <div className="App">
      <Header name={data.name} />
      <About image={data.image} about={data.about} />
      <ArticleList articles={data.articles} />
    </div>
  );
}

export default App;
