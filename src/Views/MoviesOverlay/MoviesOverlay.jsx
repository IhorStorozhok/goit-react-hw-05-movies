import { Outlet, useParams } from 'react-router-dom';

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
