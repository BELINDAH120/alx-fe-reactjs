import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '2px solid #333', borderRadius: '8px', marginTop: '20px', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ color: '#333', marginBottom: '15px' }}>Counter Application</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff', marginBottom: '20px' }}>
        Current Count: {count}
      </p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ffc107',
            color: '#333',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
