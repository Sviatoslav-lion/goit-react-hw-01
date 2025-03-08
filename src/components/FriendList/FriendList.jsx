import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.FriendList}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {friends.map(friend => (
        <li className={css.FriendListItem} key={friend.id}>
          <FriendListItem friend2={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
