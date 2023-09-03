import React from 'react';
import css from './UserMenu.module.css';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}> Welcome {user.name}!</p>
      <p>
        <NavLink className={css.username} to="/contacts">
          Enjoy!
        </NavLink>
      </p>
    </div>
  );
};
