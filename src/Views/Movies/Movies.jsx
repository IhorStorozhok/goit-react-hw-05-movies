import react from 'react';
import s from './Movies.module.css';
import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import HomePage from 'Views/HomePage/HomePage';
import { findMovie } from '../../Api/Api';

export default function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filmsFromQuery, setFilmsFromQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query') ?? '';

  const navigate = useNavigate();

  useEffect(() => {
    const queryVariants = query && searchQuery === '' ? query : searchQuery;
    setSearchQuery(queryVariants);
    if (queryVariants !== '') {
      findMovie(queryVariants, 1).then(data => setFilmsFromQuery(data.results));
    }
    let queryUrl = `${searchQuery ? `?query=${searchQuery}` : ''}`;

    navigate(queryUrl, {
      replace: true,
    });
  }, [navigate, query, searchQuery]);

  return (
    <div>
      <section className="section">
        <h2>Find film</h2>
        <form
          onSubmit={e => {
            if (inputValue !== '') {
              e.preventDefault();
              setSearchQuery(inputValue);
              setInputValue('');
            } else {
              e.preventDefault();
              alert('Please enter your query');
            }
          }}
        >
          <input
            type="text"
            name="query"
            value={inputValue}
            onChange={e => {
              setInputValue(e.currentTarget.value.trim());
            }}
          />
          <button>Search</button>
        </form>
        {filmsFromQuery && <HomePage trendFilms={filmsFromQuery} />}
      </section>
      <Outlet />
    </div>
  );
}
