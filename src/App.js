import './styles/App.css';
import Navbar from './Components/mainPage/NavBar';
import BlogPosts from './Components/blogPosts/BlogPosts';

function App() {
  const selectedPage = ({pageSelect}) =>{}
  
  return (
    <div className="App">
      <Navbar />
      
      <BlogPosts />
    </div>
  );
}

export default App;
