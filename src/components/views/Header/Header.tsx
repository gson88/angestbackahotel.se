import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import IntlMessage from '~/components/views/IntlMessage/IntlMessage';
import routes from '~/routes';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={cn(style.Header, 'flex items-center uppercase p-4')}>
      <div className={style.logo}>
        <NavLink to={routes.cabins.path}>
          <img src="/images/logo.jpg" />
        </NavLink>
      </div>
      <nav className={cn(style.nav, 'flex')}>
        <NavLink to={routes.cabins.path} activeClassName={style.active}>
          <IntlMessage message="web.header.link.cabins" />
        </NavLink>
        <NavLink to={routes.adventures.path} activeClassName={style.active}>
          <IntlMessage message="web.header.link.adventures" />
        </NavLink>
        {/*<NavLink to={routes.restaurant.path} activeClassName="active">
          <IntlMessage message="web.header.link.restaurant"/>
        </NavLink>*/}
      </nav>

      <div className="flex-grow flex justify-end">
        <div className={style.temp}>
          <div className={style.xs}>
            XS
          </div>
          <div className={style.sm}>
            SM
          </div>
          <div className={style.md}>
            MD
          </div>
          <div className={style.lg}>
            LG
          </div>
          <div className={style.xl}>
            XL
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
