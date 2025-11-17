// src/App.jsx
import React from "react";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./context/UserContext";

function App() {
  // User data to be provided through Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Context API Demo - No Prop Drilling
      </h1>
      
      {/* Wrap ProfilePage with UserContext.Provider and pass userData as value */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </div>
  );
}

export default App;
