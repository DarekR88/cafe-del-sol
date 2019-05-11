import React from 'react';
import './Footer.css';

function Footer({ children }) {
  return (
    <div className='Footer'>
      <div>{children}</div>
    </div>
  );
}

export { Footer };