import { useState } from 'react';
import './App.css';
import Profile from '../components/Profile/Profile.jsx';
import userData from '../userData.json';
import FriendList from '../components/FriendList/FriendList.jsx';
import friendsData from '../friends.json';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory.jsx';
import transactionData from '../transaction.json';

// const [count, setCount] = useState(0);

export default function App() {
  return (
    <div>
      <h1>Profile</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </div>
  );
}
