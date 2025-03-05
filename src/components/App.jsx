import { useState } from 'react';
import './App.css';
import Profile from '../components/Profile/Profile.jsx';
import userData from '../userData.json';

// const [count, setCount] = useState(0);

export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}
