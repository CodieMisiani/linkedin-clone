// Login.jsx

import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './store/redux'; // Import your login action to dispatch user data to the store
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase'; // Import auth methods

const Login = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    // Login function
    const LoginToApp = (e) => {
        e.preventDefault();  // Prevent the form from reloading the page
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                // Dispatch the login action with the user data
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }));
            })
            .catch((error) => alert(error.message));  // Handle any errors
    };

    // Register function
    const register = () => {
        if (!name) {
            return alert('Please enter a full name!'); // Name is required
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,  // Set the user's display name
                    photoURL: profilePic,  // Set the user's photo URL
                })
                .then(() => {
                    // Dispatch the user data to the store
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                    }));
                });
            })
            .catch((error) => alert(error));  // Handle any errors
    };

    return (
        <div className='login'>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/LinkedIn_logo_initials.png" // Add your logo image URL here
                alt="LinkedIn Logo" 
            />
            <form action="">
                <input
                    type="text"
                    placeholder='Full name (required for registration)'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Profile pic URL (optional)'
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />

                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit' onClick={LoginToApp}>Sign In</button>
            </form>

            <p>
                Not a member? <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    );
};

export default Login;
