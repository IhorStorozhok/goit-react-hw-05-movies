import { React, useState, useEffect } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={s.navlinksList}>
          <li>
            <NavLink end to="/" className={s.navlinksItem}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'movies'} className={s.navlinksItem}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
