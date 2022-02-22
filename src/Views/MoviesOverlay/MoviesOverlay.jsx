import react from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const MoviesOverlay = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MoviesOverlay;
