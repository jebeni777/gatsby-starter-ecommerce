import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Terms = ({location}) => (
  <Layout location={location}>
    <SEO title="Terms" />
    <h1>Terms</h1>
    <h3>Returns</h3>
    <p>
      We have a 30 day return policy. Please contact us to let us know if for
      any reason you are not completely satisfied with the product. You can
      return it to us for a full refund of the purchase price only excluding tax
      and shipping charges.
    </p>
  </Layout>
)

export default Terms
