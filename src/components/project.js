import React from "react"

const Project = props => {
  return (
    <li>
      <a
        href={props.href}
        data-project={props.project}
        onMouseEnter={props.onHover}
        onMouseLeave={props.onHover}
      >
        {props.title}
      </a>
    </li>
  )
}

export default Project
