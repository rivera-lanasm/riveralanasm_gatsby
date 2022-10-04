import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

import Navbar from "../components/navbar";

const Header = ({ siteTitle }) => (
  <header>

    <div>
        <Navbar />
    </div>

     {/* <div className="header_logo">
       <h2>
         <Link to="/">{siteTitle}</Link>
       </h2>
    
     </div>     */}

  

    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}


export default Header
