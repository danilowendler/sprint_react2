import React from 'react';
import LeftBox from './LeftBox';
import RightBox from './RightBox';
import '../App.css';

const MainContainer = () => {
    return (
        <div className="main-container">
            <LeftBox />
            <RightBox />
        </div>
    );
};

export default MainContainer;

