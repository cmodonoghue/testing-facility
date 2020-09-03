/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from '@reach/router';
import "../styles.scss";

import Header from "./Navigation/header"
import NavScreen from "./Navigation/navigation";

const Layout = ({ children }) => {
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(true);
  const target = React.createRef();
  const test = 'hi';
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        } 
      }
    }
  `)

  const toggleNav = () => {
    console.log(navActive);
    setNavActive(!navActive);
  }

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata.title} 
        navActive={navActive}
        onToggleNav={toggleNav}
        target={target}
        headerActive={headerActive}
      />
      <NavScreen 
        key={navActive}
        navActive={navActive} 
        onToggleNav={toggleNav} 
      />
      <div>
        <main className={!!headerActive ? "main" : "main--no-header"}>{children({toggleNav})}</main>
        <footer></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
