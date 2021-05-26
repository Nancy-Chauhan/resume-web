module.exports = {
  siteMetadata: {
    title: 'Nancy Chauhan',
    description: `Resume of Nancy`,
    author: `@recrsn`,
    contactInfo: {
      email: 'nancychn1@gmail.com',
      twitter: '_nancychauhan',
      linkedIn: 'nancy-chauhan',
      github: 'Nancy-Chauhan',
      medium: 'https://medium.com/@_nancychauhan'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-netlify',
    'gatsby-plugin-meta-redirect',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Cairo', 'IBM Plex Serif'],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
