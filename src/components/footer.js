import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  return (
    <footer>
      <div>
        ©{author.name}, {new Date().getFullYear()}
      </div>
      <div>
        Built using <a href="https://www.gatsbyjs.com">Gatsby</a> and{" "}
        <a href="https://mdxjs.com/">MDX</a>
        , based on this <a href="https://github.com/annarosca/gatsby-starter-blog-dev-mdx">template</a>
        {"."}
      </div>
    </footer>
  )
}

export default Footer
