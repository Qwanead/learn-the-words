import React from 'react';
import s from './header-block.module.scss';
// import { ReactComponent as ReactLogoSvg } from './img/logo.svg';

const HeaderBlock = ({ hideBackgound = false, children }) => {
  const styleBackground = hideBackgound ? { backgroundImage: 'none' } : {};

  return (
    <div className={s.cover} style={styleBackground}>
      <div className={s.wrap}>
        { children }
      </div>
    </div>
  );
};

export default HeaderBlock;
