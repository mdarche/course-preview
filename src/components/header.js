import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';

const Header = ({ siteTitle }) => {
  const [showMenu, setMenu] = useState(false);

  return (
    <SiteHeader>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <button onClick={() => setMenu(!showMenu)}>
        <MenuIcon />
      </button>
      {/* {showMenu ? <MobileMenu /> : null} */}
    </SiteHeader>
  );
};

// Styled Components

const SiteHeader = styled.header`
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e14141;

  h1 {
    margin: 0;
    font-size: 25px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  button {
    padding: 0;
    display: flex;
    background: none;
    border: none;
  }
`;

// Prop Types

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
