import React, { useState, useEffect } from 'react';
import { auth, provider, signInWithPopup, signOut } from './Firebaseconfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [user, setUser] = useState(null);
    const [toastShown, setToastShown] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
                setToastShown(false); // Reset toast shown state on logout
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                if (!toastShown) {
                    showToast(result.user.displayName || result.user.email);
                    setToastShown(true);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                setToastShown(false);
                toast.info('Logged out successfully');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const showToast = (name) => {
        toast.success(`Welcome, ${name}!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className='bg-gradient-to-r from-[#1d2125] via-[#2d3238] to-[#3b4045] w-full h-16 p-4 border-b bordered-box flex flex-row justify-between items-center border-b-[#9fadbc29]'>
            <div className="left flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => window.location.reload()}>
                <img src="/logo.png" alt="Logo" className='h-8 w-8 rounded-full shadow-md transition-shadow duration-300 hover:shadow-lg' />
                <h3 className='text-slate-50 text-xl font-semibold hover:text-[#9fadbc] transition-colors duration-300'>Trello Board</h3>
            </div>
            <div className="right flex items-center space-x-4 ml-auto">
                {user ? (
                    <>
                        <span className='text-slate-200'>{user.displayName || user.email}</span>
                        <img
                            className='rounded-full border border-[#9fadbc29] h-8 w-8 cursor-pointer'
                            src={user.photoURL || "https://placehold.co/28x28/png"}
                            alt="User Avatar"
                            onClick={handleLogout}
                        />
                    </>
                ) : (
                    <button onClick={handleLogin} className='bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700'>
                        Login
                    </button>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Header;