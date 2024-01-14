import React from 'react';
import Bookmarks from './Bookmarks';
import NavBar from './NavBar';
import MiddleContent from './MiddleContent';

const HomePage = () => {
    return (
        <div className="home">
            <NavBar />
            <Bookmarks />
            <MiddleContent />
        </div>
    );
}

export default HomePage;