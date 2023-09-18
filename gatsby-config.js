module.exports = {
  siteMetadata: {
    title: `Jack Crawford Robertson`,
    description: `Exploring how storytelling and narratives can unlock insights into complex systems like economics and politics.`,
    author: `@JackRobert20033`,
    siteUrl: `https://jack-robertson.co.uk/`, // Make sure this is the correct URL for your site
    keywords: [
      "storytelling",
      "narratives",
      "economics",
      "politics",
      "data visualization",
      "design",
    ],
    twitterUsername: "@JackRobert20033",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    
    // Add the gatsby-plugin-sitemap configuration here
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`, // Define the output path for your sitemap
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl;
        },
        serialize: ({ site, allSitePage }) => {
          if (allSitePage && allSitePage.nodes) {
            return allSitePage.nodes.map(node => {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: "daily",
                priority: 0.7,
              };
            });
          } else {
            return [];
          }
        },
      },
    },
    
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
        name: `Jack Robertson's Portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo_Web.png`,
      },
    },
    
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://jack-robertson.co.uk/",
        sitemap: "https://jack-robertson.co.uk/sitemap.xml", // Specify the URL to your sitemap
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["GTM-TKL73J5Q"],
      },
    },
  ],
};
