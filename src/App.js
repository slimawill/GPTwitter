import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Navbar from './components/navbar';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <main className='w-screen'>
      <Navbar />
      <CreatePost />
      <Post author="William" msg="Legal"/>
      <Post author="Laurinha" msg="Super show"/>
      <Post author="Dudu" msg="Venha Boliviana"/>
      <Post author="P3" msg="tô preso na van"/>
    </main>
    );
}

export default App;
