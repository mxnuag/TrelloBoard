import React, { useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from './Firebase'; // Adjust the path if necessary
import { toast } from 'react-toastify'; // Import toast functions
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Successful login
        console.log('User signed in:', result.user);
        toast.success(`Welcome, ${result.user.displayName}!`); // Show success toast
      })
      .catch((error) => {
        // Handle Errors here.
        console.error('Error signing in:', error);
        toast.error('Error signing in. Please try again.'); // Show error toast
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('User signed out');
        toast.success('You have been logged out.'); // Show success toast
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
        toast.error('Error signing out. Please try again.'); // Show error toast
      });
  };

  const handleLogoClick = () => {
    window.location.reload(); // Reload the page on logo click
  };

  return (
    <div className='bg-gradient-to-b from-gray-800 via-gray-900 to-black w-full h-16 p-4 border-b border-[#9fadbc29] flex flex-row justify-between items-center'>
      <div className="left flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
        <img
          className='w-10 h-10 rounded-full transition-transform duration-300 transform hover:scale-110'
          src="/logo.png"
          alt="Logo"
        />
        <h3 className='text-slate-50 text-xl hover:text-blue-400 transition-transform duration-300 transform hover:scale-110'>
          Trello
        </h3>
      </div>
      <div className="right flex items-center space-x-4">
        {!user ? (
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            onClick={handleLogin}
          >
            Login
          </button>
        ) : (
          <div className="flex items-center space-x-4">
            <span className='text-slate-50'>{user.displayName}</span>
            <img
              className='w-10 h-10 rounded-full'
              src={user.photoURL || 'https://placehold.co/28x28/png'}
              alt="Profile"
            />
            <button
              className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
