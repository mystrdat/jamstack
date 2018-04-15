import React from "react"
import Link from "gatsby-link"

export default () => {
  return (
    <div>
      <h1>Hello CVUT!</h1>
      <ul>
        <li>
          <Link to="/test-post-1/">Test post 1</Link>
        </li>
        <li>
          <Link to="/hello-cvut/">Hello CVUT</Link>
        </li>
      </ul>
    </div>
  )
}
