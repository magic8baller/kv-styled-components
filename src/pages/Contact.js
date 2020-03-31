import React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/Layout"
import SEO from "../components/seo"
import styled from 'styled-components'
const StyledDiv = styled.div`
height: calc(100vh - 10rem);
margin-top: 8rem;
`
const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
		<StyledDiv>

    <h1>Hi from the Contact page</h1>
    <p>Welcome to CONTACT</p>
    <Link to="/">Go back to the homepage</Link>
		</StyledDiv>
  </Layout>
)

export default ContactPage
