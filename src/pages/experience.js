import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ExperienceWing from "../components/ExperienceWing/ExperienceWing";

const Experience = () => (
  <Layout>
    {
        props => (
          <div>
            <SEO title="Experience Wing" />
            <ExperienceWing />
          </div>
        )
      }    
  </Layout>
)

export default Experience;
