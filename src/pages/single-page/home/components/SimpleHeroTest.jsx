import React from 'react';

const SimpleHeroTest = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(45deg, #007bff, #0056b3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Simple Hero Test - Can You See This?
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          This is a test to verify that text rendering works at all.
        </p>
        <button style={{ 
          padding: '12px 24px',
          fontSize: '1rem',
          background: '#fff',
          color: '#007bff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Test Button
        </button>
      </div>
    </div>
  );
};

export default SimpleHeroTest;