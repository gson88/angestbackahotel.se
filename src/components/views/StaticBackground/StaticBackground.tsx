import React from 'react';
import cn from 'classnames';
import style from './StaticBackground.module.scss';

interface IStaticBackground {
  src: string,
  height: string,
  children: any | null
}

const StaticBackground = ({ src, height, children }: IStaticBackground) => {
  return (
    <article
      className={cn(style.StaticBackground, 'flex items-center justify-center')}
      style={{
        height,
        backgroundImage: `url("${src}")`
      }}>
      { children }
    </article>
  );
};

export default StaticBackground;
