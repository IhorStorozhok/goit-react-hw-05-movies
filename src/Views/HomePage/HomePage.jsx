import { NavLink, Outlet, useParams } from 'react-router-dom';

import s from './HomePage.module.css';

const HomePage = ({ trendFilms, title }) => {
  return (
    <section className="section">
      <h2 className={s.title}>{title}</h2>
      <ul className={s.trendsList}>
        {trendFilms.map(el => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? 'red' : 'blue')}
              key={el.id}
              to={`/movies/${el.id}`}
            >
              <li key={el.id} className={s.trendsListItem}>
                {el.title}
              </li>
            </NavLink>
          );
        })}
      </ul>

      <Outlet />
    </section>
  );
};
export default HomePage;
