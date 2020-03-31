import React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/Layout"
import SEO from "../components/seo"
import styled from 'styled-components'
const StyledDiv = styled.div`
height: calc(100vh - 10rem);
margin-top: 8rem;
`
const AboutPage = () => (
  <Layout>
    <SEO title="About page" />
		<StyledDiv>

    <h1>Hi from the About page</h1>
    <p>Welcome to About</p>
    <Link to="/">Go back to the homepage</Link>
		</StyledDiv>
  </Layout>
)

export default AboutPage
