import React from 'react';

const Header = () => {
    return (
        <div className='bg-gradient-to-r from-[#1d2125] via-[#2d3238] to-[#3b4045] w-full h-16 p-4 border-b bordered-box flex flex-row justify-between items-center border-b-[#9fadbc29]'>
            <div className="left flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => window.location.reload()}>
                <img src="/logo.png" alt="Logo" className='h-8 w-8 rounded-full shadow-md transition-shadow duration-300 hover:shadow-lg' />
                <h3 className='text-slate-50 text-xl font-semibold hover:text-[#9fadbc] transition-colors duration-300'>Trello Board</h3>
            </div>
            <div className="right flex items-center space-x-4">
                <span className='text-slate-200'>Remote dev</span>
                <img className='rounded-full border border-[#9fadbc29]' src="https://placehold.co/28x28/png" alt="User Avatar" />
            </div>
        </div>
    );
}

export default Header;