import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Map from '../../assets/map-black.svg';
import MapNav from '../../assets/map-white.svg';

const Header = ({ siteTitle, onToggleNav, navActive, target, headerActive }) => {
  const [progress, setProgress] = useState(0);

  const scrollListener = () => {
    // console.log('scroll:' + progress);
    // if (!target.current) {
    //   console.log('target undefined')
    //   return;
    // }
    // console.log('scroll:' + progress);


    // const element = document.documentElement;
    // const totalHeight = element.clientHeight - element.offsetTop - (window.innerHeight);
    // const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // if (windowScrollTop === 0) {
    //   return setProgress(0);
    // }

    // if (windowScrollTop > totalHeight) {
    //   return setProgress(100);
    // }

    // setProgress((windowScrollTop / totalHeight) * 100);

    const scrollTop = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollTop / windowHeight * 100}%`;

    console.log(scrolled);

    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  const handleNav = () => {
    onToggleNav();
  }

  const closeNav = () => {
    if (navActive === true) {
      onToggleNav();
    }
  }

  return (
    <div>
      <header className={`
        ${!!headerActive ? "header" : "header header--inactive"}
        ${!navActive ? "" : "header-nav--active"}
      `}>
        <Link to="/">
          <h1 className="header-title" onClick={closeNav}>Animation Testing Facility</h1>
        </Link>
        <div className="header-nav" onClick={handleNav}>
          <img src={!navActive ? Map : MapNav} className="header-nav__icon"/>
          <h1 className="header-nav__text">Navigation</h1>
        </div>
      </header>
      <div className={!!headerActive ? "header-progress" : "header-progress header-progress--inactive"}>
        <div className={`header-progress__bar`} style={{width: progress}}></div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
