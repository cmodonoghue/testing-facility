import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import InteractionWing from "../components/InteractionWing/InteractionWing";

const Interaction = () => (
  <Layout toggleNav>
    <SEO title="Interaction Wing" />
    <InteractionWing />  
  </Layout>
)

export default Interaction
