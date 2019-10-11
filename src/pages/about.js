import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const About = ({location}) => (
  <Layout location={location}>
    <SEO title="Terms" />
    <h1>About</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </Layout>
)
export default About
