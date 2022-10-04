/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Intro = () => {

//   const data = useStaticQuery(graphql`
//     query IntroQuery {
//       site {
//         siteMetadata {
//           description
//           author {
//             name
//             summary
//           }
//           social {
//             twitter
//           }
//         }
//       }
//     }
//   `)

//   // Set these values by editing "siteMetadata" in gatsby-config.js
//   const author = data.site.siteMetadata?.author
//   const social = data.site.siteMetadata?.social

  return (
    <div className="intro">
      
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/bio_pic.png"
        width={200}
        height={200}
        quality={95}
        alt="Profile picture"
      />

      {/* Introduction */}

        <h4>Writing about intersections of technology, society, and public policy</h4>


    </div>
  )
}

export default Intro
