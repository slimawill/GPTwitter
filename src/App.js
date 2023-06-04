import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Navbar from './components/navbar';
import CreatePost from './components/CreatePost';
import React, {useState} from 'react';

function App() {

  const [Posts, setPosts] = useState([]);

  function addPost(PostData){
    setPosts([PostData, ...Posts]);
    console.log(Posts[0]);
  }

  return (
    <main className='w-screen'>
      <Navbar/>
      <CreatePost onAddPost={addPost}/>
      {Posts.map(Posts=><Post author={Posts.author} msg={Posts.message}/>)}
    </main>
    );
}

export default App;
