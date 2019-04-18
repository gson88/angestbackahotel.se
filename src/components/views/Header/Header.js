import React from 'react';
import { NavLink } from 'react-router-dom';
import IntlMessage from '~components/views/IntlMessage/IntlMessage';
import routes from '~routes';
import './Header.scss';

const Header = () => {
  return (
    <header className="Header flex items-center uppercase p-4">
      <div className="logo">
        <img src="/images/logo.jpg" />
      </div>
      <nav className="menu flex">
        <NavLink to={routes.cabins.path} activeClassName="active">
          <IntlMessage message="web.header.link.cabins" />
        </NavLink>
        <NavLink to={routes.adventures.path} activeClassName="active">
          <IntlMessage message="web.header.link.adventures" />
        </NavLink>
        {/*<NavLink to={routes.restaurant.path} activeClassName="active">
          <IntlMessage message="web.header.link.restaurant"/>
        </NavLink>*/}
      </nav>

      <div className="temp-right flex-grow flex justify-end">
        <div className="temp-right">
          <div className="xs">
            XS
          </div>
          <div className="sm">
            SM
          </div>
          <div className="md">
            MD
          </div>
          <div className="lg">
            LG
          </div>
          <div className="xl">
            XL
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
