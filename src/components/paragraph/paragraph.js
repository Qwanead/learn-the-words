import React from 'react';
import s from './paragraph.module.scss';

const Paragraph = ({ children }) => (
    <p className={s.paragraph}>
      { children }
    </p>
);

export default Paragraph;
