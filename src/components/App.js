import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header"
import ArticleList from "./ArticleList"
import Article from "./Article";


function App() {
  return ( 
    <div className="App" >
          <Header name={blogData.name} />
          <About image={blogData.image} about={blogData.about} />
          <ArticleList posts={blogData.posts} />
          <Article />
    </div>
  );
}

export default App;
