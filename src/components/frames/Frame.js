import React from 'react';
import './frame.css';

const Frame = ({ icon, title, integer, tag }) => {
  return (
    <div className="frame">
      <div className="icon">{icon}</div>
      <div className='frame-content'>
        <div className='content-text'>
            <div className="frame-title">{title}</div>
            <div className="integer">{integer}</div>
        </div>
        <div className="tag">{tag}</div> 
      </div>
    </div>
  );
};

export default Frame;
