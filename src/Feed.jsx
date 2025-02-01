import React, { useState, useEffect } from 'react';
import './Feed.css';
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase'; // Import db from firebase.js
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './store/redux';


const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts'); // Get "posts" collection
      const snapshot = await getDocs(postsCollection); // Get documents from the collection
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })));
    };

    fetchPosts(); // Fetch posts on component mount
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    // Add new post to Firestore
    await addDoc(collection(db, 'posts'), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: serverTimestamp(),
    });

    setInput(''); // Clear the input field after sending the post
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {/* Render posts */}
      
      {posts.map(post => (
        <Post
          key={post.id} // Always provide a unique key for each Post
          name={post.data.name}
          description={post.data.description}
          message={post.data.message}
          photoUrl={post.data.photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
