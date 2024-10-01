import React from 'react';
import '../App.css';

const LeftBox = () => {
    return (
        <div className="left-box nextrace">
        <h2 className="next-race-title">Next Race</h2>
        <p className="next-race-date">Montreal - 21-07-24</p>
        <iframe 
          src="https://www.youtube.com/embed/CEyc585qtr4?si=EUmhzmLHEeGlgO3O"
          title="YouTube video player" 
          frameBorder="0" 
          allowFullScreen 
          style={{ width: '100%', height: '400px' }} 
        />
        <p>Click to watch</p>
      </div>
    );
};

export default LeftBox;
