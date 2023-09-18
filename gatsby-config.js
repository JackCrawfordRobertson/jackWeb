module.exports = {
  siteMetadata: {
    title: `Jack Crawford Robetson`,
    description: `Exploring how storytelling and narratives can unlock insights into complex systems like economics and politics.`,
    author: `@JackRobert20033`,
    siteUrl: `https://jack-robertson.co.uk/`,
    keywords: ["storytelling", "narratives", "economics", "politics", "data visualization", "design"],
    twitterUsername: "@JackRobert20033",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jack Robetsons Portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo_Web.png`, // Update with the relative path
      },
    },
    
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "GTM-TKL73J5Q", // Replace with your GTM ID
        ],
      },
    },
  ],
};
