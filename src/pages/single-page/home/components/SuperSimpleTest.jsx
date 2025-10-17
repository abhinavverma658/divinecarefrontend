import React from 'react';

const SuperSimpleTest = () => {
  return (
    <div style={{
      height: '100vh',
      background: 'red',
      color: 'white',
      fontSize: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <div>
        <h1>SUPER SIMPLE TEST</h1>
        <p>If you can read this, React is working!</p>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default SuperSimpleTest;