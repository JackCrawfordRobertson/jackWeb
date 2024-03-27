import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

function Seo({ description, title, children, keywords, url: propUrl }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            twitterUsername
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;
  const url = site.siteMetadata.siteUrl;
  const twitterUsername = site.siteMetadata.twitterUsername;


  return (
    <Helmet
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      defaultTitle={defaultTitle}
    >
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords ? keywords.join(', ') : ''} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {/* ... (rest of the existing code including structured data script) */}
    </Helmet>
  
  );
}

export default Seo;
