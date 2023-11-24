module.exports = {
  siteMetadata: {
    title: `Jack Crawford Robertson`,
    description: `Exploring how storytelling and narratives can unlock insights into complex systems like economics and politics.`,
    author: `@JackRobert20033`,
    siteUrl: `https://jack-robertson.co.uk/`, 
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
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return {
              ...page,
            };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: 'daily',
            priority: 0.7,
          };
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
        sitemap: "https://jack-robertson.co.uk/sitemap.xml", // It remains the same because the manual sitemap is at the same location
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
