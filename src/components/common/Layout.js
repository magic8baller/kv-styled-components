import PropTypes from "prop-types"
import {useStaticQuery, graphql, Link} from "gatsby"
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import GlobalStyle from '../globals/GlobalStyles'
const Layout = ({children}) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
	return (
		<>
			<Navbar siteTitle={data.site.siteMetadata.title}/>
			<GlobalStyle/>
			<main>{children}</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}
export default Layout
