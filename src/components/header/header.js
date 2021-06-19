import React from 'react';
import s from './header.module.scss';

const Header = ({ children }) => (
    <h1 className={s.header}>
      { children }
    </h1>
);

export default Header;
