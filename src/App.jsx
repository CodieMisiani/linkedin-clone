import { useEffect } from "react";
// src/App.jsx
import { useDispatch, useSelector } from 'react-redux';  // Import useSelector from react-redux
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { login, logout, selectUser } from './store/redux'; // Import selectUser from redux.js
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);  // Use the selector to access the user state
  const dispatch = useDispatch();
  useEffect(() => {
   auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
    }else {
      // user is logged out
      dispatch(logout());
    }
   });
  }, [])
  
  return (
    <div className="app">
      {/* Header */}
      <Header />
      
      {!user ? (
        <Login />  // If there's no user, show the login component
      ) : (
        <div className="app__body">
          {/* App body */}
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
