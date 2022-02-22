import react, { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getViews } from 'Api/Api';

const Review = ({ Review }) => {
  const [movieViews, setMovieViews] = useState([]);
  let params = +useParams().id;

  useEffect(() => {
    getViews(params).then(data => {
      setMovieViews(data);
    });
  }, [params]);

  return (
    <div>
      <ul>
        {movieViews.results && movieViews.results.length !== 0 ? (
          movieViews.results.map((el, index) => {
            return (
              <li key={index}>
                <h4>{`Author: ${el.author}`}</h4>
                <article>{el.content}</article>
              </li>
            );
          })
        ) : (
          <p>We don`t have any reviews for this movie </p>
        )}
      </ul>
    </div>
  );
};

export default Review;
