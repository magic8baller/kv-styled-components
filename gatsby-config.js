module.exports = {
  siteMetadata: {
    title: `Kingsview Realty`,
		description: `Servicing Brooklynites in the real estate and mortgage business for over 29 years.`,
		headline: `We work hard for you`,
		approach: `Whether you are first time home buyer purchasing your dream home, moving up to a bigger home, downsizing, buying a second home, investing in real estate, refinancing an existing mortgage, cashing out or consolidating debt or renovating an existing residence, our highly experienced team of licensed mortgage originators will carefully analyze your qualifications to provide financing solutions that work for you.\n\nWe have originated thousands of mortgage loans since 1995 with a client first business strategy that continues to be the company core guiding principle. We constantly evaluate our wholesale lending relationships to bring our clients aggressive interest rates, new and innovative products, underwriting efficiency and advances in technology all of which contribute to our competitive advantage.`,
		author: `Leslie Turis`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
		},
		{
			resolve: 'babel-plugin-styled-components',
			options: {
				displayName: true,
			},
		},
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {
				displayName: true,
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Open Sans`,
					},
					{
						family: `Playfair Display`,
						variants: [`400`, `600`]
					}
				],
			},
		},
		`gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
