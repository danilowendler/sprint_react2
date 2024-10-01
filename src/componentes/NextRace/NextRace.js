import React from 'react';
import './NextRace.css';

function NextRace() {
  return (
    <div className="left-box nextrace">
      <h2>Next Race</h2>
      <p>Montreal - 21-07-24</p>
      <iframe
        width="100%"
        height="715"
        src="https://www.youtube.com/embed/CEyc585qtr4?si=EUmhzmLHEeGlgO3O"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>Click to watch</p>
    </div>
  );
}

export default NextRace;