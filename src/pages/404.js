import React from "react"
import Layout from "../components/common/Layout"
import SEO from "../components/seo"
import styled from 'styled-components'
const StyledDiv = styled.div`
height: calc(100vh - 10rem);
margin-top: 8em;
`
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
   	<StyledDiv>
		 <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			</StyledDiv>
  </Layout>
)

export default NotFoundPage
