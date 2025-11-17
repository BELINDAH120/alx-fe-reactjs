// src/components/UserProfile.jsx
const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', margin: '0 0 10px 0' }}>{props.name}</h2>
      <p style={{ margin: '8px 0', fontSize: '16px' }}>Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span></p>
      <p style={{ margin: '8px 0', fontSize: '16px', fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
