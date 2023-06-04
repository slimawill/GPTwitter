import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Navbar from './components/navbar';

function App() {
  return (
    <main>
      <Navbar />
      <Post author="William" msg="Legal"/>
      <Post author="Laurinha" msg="Super show"/>
      <Post author="Dudu" msg="Venha Boliviana"/>
      <Post author="P3" msg="tô preso na van"/>
    </main>
    );
}

export default App;
