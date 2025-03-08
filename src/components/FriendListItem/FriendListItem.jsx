import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ friend2 }) => {
  const {
    avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    name = 'Unknown',
    isOnline = 'unknown',
  } = friend2;

  return (
    <div className={css.friendListItem}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
