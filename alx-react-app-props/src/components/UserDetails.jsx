import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
  // Consume UserContext using the useContext hook
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>User Information</h2>
      {userData ? (
        <>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>
            <strong>Name:</strong> {userData.name}
          </p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>
            <strong>Email:</strong> {userData.email}
          </p>
        </>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default UserDetails;
