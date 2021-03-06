import React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/Layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'
const StyledDiv = styled.div`
height: calc(100vh - 10rem);
margin-top: 8rem;
`
const IndexPage = () => (
  <Layout>
	<StyledDiv>
    <SEO title="Home" />

    <h1>Hi people</h1>

    <Link to="/page-2/">Go to page 2</Link></StyledDiv>
  </Layout>
)

export default IndexPage
