import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <header className='bg-lime-500 py-6'>
                <h1 className='text-center text-xl font-bold text-lime-900'>User Management System</h1>
            </header>
            <div className='container mx-auto'>
                <Outlet />
            </div>
        </>
    );
};

export default App;