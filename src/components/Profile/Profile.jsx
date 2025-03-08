import css from './Profile.module.css';

export default function Profile({
  name = 'Unknown', // ім'я користувача
  tag = 'unknown', // тег в соціальній мережі без **`@`**
  location = 'Unknown location', // місто і країна
  image = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png', // посилання на зображення
  stats: { followers = 0, views = 0, likes = 0 }, // об'єкт з інформацією про активності
}) {
  return (
    <div>
      <div className={css.profile}>
        <div className={css.info}>
          <img className={css.avatar} src={image} alt={name} />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.item}>
            <span className={css.itemInfo}>Followers</span>
            <span className={css.itemNumbers}>{followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.itemInfo}>Views</span>
            <span className={css.itemNumbers}>{views}</span>
          </li>
          <li className={css.item}>
            <span className={css.itemInfo}>Likes</span>
            <span className={css.itemNumbers}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
