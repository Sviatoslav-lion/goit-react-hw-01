import { useState } from 'react';
import './App.css';
import Profile from '../components/Profile/Profile.jsx';

// const [count, setCount] = useState(0);

export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <Profile />
      <Profile />
    </div>
  );
}
