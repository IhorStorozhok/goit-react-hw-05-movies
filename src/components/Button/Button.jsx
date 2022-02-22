import react from 'react';
import s from './Button.module.css';

import { useNavigate } from 'react-router-dom';

const Button = ({ imgComponent, path }) => {
  const navigate = useNavigate();

  return (
    <div
      className={s.button}
      onClick={() => {
        navigate(path);
      }}
    >
      {imgComponent} <p>Go back</p>
    </div>
  );
};
export default Button;
