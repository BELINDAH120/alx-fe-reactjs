// src/App.jsx
import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <UserProfile
        name="My Code Teacher"
        age="30"
        bio="Enjoys teaching kids React and building cool projects!"
      />
    </div>
  );
}

export default App;
