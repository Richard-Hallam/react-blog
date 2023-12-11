import './styles/App.css';
import Navbar from './Components/mainPage/NavBar';
import BlogPosts from './Components/blogPosts/BlogPosts';
import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects';
import React, { useState } from 'react';

function App() {
  const [pageSelector, setPageSelector] = useState('about')

  function updatePageSetter(page) {
    setPageSelector(page)
  }

  switch(pageSelector){
    case 'home':
      return (
        <div className="App">
          <Navbar updatePageSetter={updatePageSetter} />
          <Home/>
        </div>)
    case 'about':
      return(
        <div className="App">
          <Navbar updatePageSetter={updatePageSetter} />
          <About />
        </div>
      );
      case 'projects':
      return(
        <div className="App">
          <Navbar updatePageSetter={updatePageSetter} />
          <Projects/>
        </div>
      );
    case 'posts':
      return(
        <div className='App'>
          <Navbar updatePageSetter={updatePageSetter} />
          <BlogPosts />
        </div>
      )
    default:
      <div className="App">

        </div>
  }
  
}

export default App;
