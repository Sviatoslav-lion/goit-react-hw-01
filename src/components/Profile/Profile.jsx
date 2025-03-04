import './Profile.module.css';

export default function Product({
  name, // ім'я користувача
  tag, // тег в соціальній мережі без **`@`**
  location, // місто і країна
  image, // посилання на зображення
  stats, // об'єкт з інформацією про активності
}) {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
