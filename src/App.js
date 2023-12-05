import './styles/App.css';
import Navbar from './Components/mainPage/NavBar';
import BlogPosts from './Components/blogPosts/BlogPosts';
import About from './Components/About';
import React, { useState } from 'react';

function App() {
  const [pageSelector] = useState('home')

  switch(pageSelector){
    case 'home':
      return (
        <div className="App">
          <Navbar />
          <BlogPosts />
        </div>)
    case 'about':
      return(
        <div className="App">
          <Navbar />
          <About />
        </div>
      );
    default:
      <div className="App">
          <Navbar />
          <BlogPosts />
        </div>
  }
  
}

export default App;
