import React, { useState } from 'react';
import { Link } from "gatsby";

const NavScreen = ({ navActive, onToggleNav }) => {
  const [display, setDisplay] = useState(null);
  const [displayHeadline, setDisplayHeadline] = useState(null);
  const [displayContent, setDisplayContent] = useState(null);
  const [underConstruction, setUnderConstruction] = useState(false);

  const closeNav = () => {
    onToggleNav();
  }

  const showDisplay = (wing) => {
    setDisplay(wing);
    if (wing === 'interaction') {
      setDisplayHeadline('Testing methods of providing visual user feedback.');
      setDisplayContent('Hovers, clicks, dragging, navigation, etc. to make websites more interactive.');
      setUnderConstruction(false);
    }
    else if (wing === 'illustration') {
      setDisplayHeadline('Tests of the artistic variety.');
      setDisplayContent('Animated icons, illustrations, backgrounds, etc. to make websites more fun.');
      setUnderConstruction(true);
    }
    else if (wing === 'experience') {
      setDisplayHeadline('Testing full page user experiences.');
      setDisplayContent('Animated landing pages, user flows, scroll animations, etc. to make websites more memorable.');
      setUnderConstruction(true);
    }
    else if (wing === 'loading') {
      setDisplayHeadline('Testing loading animations.');
      setDisplayContent('Animated loading spinners, skeleton screens, etc. to ease the wait.');
      setUnderConstruction(true);
    }
    else if (wing === 'secret') {
      setDisplayHeadline('secret');
      setDisplayContent('');
      setUnderConstruction(true);
    }
  }

  const removeDisplay = (wing) => {
    setDisplay(null);
    setDisplayHeadline(null);
    setDisplayContent(null);
    setUnderConstruction(false);
  }

  return (
    <div className={!navActive ? "nav nav--inactive" : "nav"}>
      <div className="wrapper">
        <div className="nav-col nav-col--left">
          <Link to="/interaction">
            <div 
              className="nav-card nav-card--interaction" 
              onClick={closeNav}
              onMouseEnter={() => showDisplay('interaction')}
              onMouseLeave={removeDisplay}
            >
              Interaction Wing
            </div>
          </Link>
          {/* <Link to="/experience"> */}
            <div 
              className="nav-card nav-card--experience nav-card--construction"
              onClick={closeNav}
              onMouseEnter={() => showDisplay('experience')}
              onMouseLeave={removeDisplay}
            >
              Experience Wing
            </div>
          {/* </Link> */}
        </div>
        <div className="nav-col nav-col--mid">
          <div 
            className="nav-card nav-card--illustration nav-card--construction"
            onMouseEnter={() => showDisplay('illustration')}
            onMouseLeave={removeDisplay}
          >
            Illustration Wing
          </div>
          <div className={!display ? "nav-description nav-description--inactive" : `nav-description nav-description--${display}`}>
            <div className="nav-description__headline">
              {displayHeadline}
            </div>
            <div className="nav-description__content">
              {displayContent}
            </div>
            <div className={!!underConstruction ? "nav-description__construction" : "nav-description__construction nav-description__construction--inactive"}>
              Under construction
            </div>
          </div>
        </div>
        <div className="nav-col nav-col--right">
          <div 
            className="nav-card nav-card--loading nav-card--construction"
            onClick={closeNav}
            onMouseEnter={() => showDisplay('loading')}
            onMouseLeave={removeDisplay}
          >
            Loading Wing
          </div>
          <div 
            className="nav-card nav-card--secret nav-card--construction"
            onMouseEnter={() => showDisplay('secret')}
            onMouseLeave={removeDisplay}
          >
            ???
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavScreen;