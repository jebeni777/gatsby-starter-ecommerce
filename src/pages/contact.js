import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Contact = ({location}) => (
  <Layout location={location}>
    <SEO title="Terms" />
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:becky@studio.un-loop.com">becky@studio.un-loop.com</a>
    </p>
  </Layout>
)

export default Contact
