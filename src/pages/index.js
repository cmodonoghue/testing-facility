import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>   
      {
        ({toggleNav}) => (
          <div>
            {console.log(toggleNav)}
            <SEO title="Home" />
            <div className="homepage">
              <h1 className="homepage-title">Animation Testing Facility</h1>
              <h2 className="homepage-subtitle">a place of web animation experiments</h2>
              <div className="homepage-nav" onClick={toggleNav}>
                <h3 className="homepage-nav__text">enter test labs</h3>
                <div className="homepage-nav__underline"></div>
              </div>
            </div>
          </div>
          )
        }         
    </Layout>
  )
}

export default IndexPage
