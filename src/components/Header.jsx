import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#1d2125] w-100 h-12 p-3 border-b bordered-box flex flex-row justify-between border-b-[#9fadbc29]'>
            <div className="left justify-center items-center flex space-x-2 hover:scale-110 transition-transform duration-300 cursor-pointer" onClick={() => window.location.reload()}>
                <img src="/logo.png" alt="Logo" className='h-6 w-6' />
                <h3 className='text-slate-50'>Trello Board</h3>
            </div>
            <div className="right flex items-center space-x-4">
                <span>Remote dev</span>
                <img className='rounded-full' src="https://placehold.co/28x28/png" alt="" />
            </div>
        </div>
    );
}

export default Header;
