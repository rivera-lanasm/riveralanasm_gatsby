import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="intro-link">
        <Link to="/"> rivera-lanasm</Link>
        {/* <Link to="/about"> About</Link> */}
        {/* <Link to="/cv"> CV</Link> */}
        {/* <Link to="/posts"> Posts</Link>*/}
      </div>

    </nav>
  )

}

