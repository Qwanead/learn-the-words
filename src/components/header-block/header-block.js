import React from 'react';
import s from './header-block.module.scss';
import ReactLogo from './img/logo.png';
import { ReactComponent as ReactLogoSvg } from './img/logo.svg';

const HeaderBlock = ({ title, hideBackgound = false, svgLogo }) => {
  const styleBackground = hideBackgound ? { backgroundImage: 'none' } : {};
  const logo = svgLogo
    ? <ReactLogoSvg className={s['logo-svg']} />
    : <img src={ReactLogo} alt='Логотип' />;

  return (
    <div className={s.cover} style={styleBackground}>
      <div className={s.wrap}>
        {title && <h1 className={s.header}>{title}</h1>}
        {logo}
        <p className={s.descr}>
          Воспользуйтесь карточками для запоминания
          и пополнения активныйх словарных запасов
        </p>
      </div>
    </div>
  );
};

export default HeaderBlock;
