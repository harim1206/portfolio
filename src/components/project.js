import React from "react"

const Project = props => {
  return (
    <li>
      <a
        href={props.href}
        data-project={props.project}
        onMouseEnter={props.onEnter}
        onMouseLeave={props.onLeave}
      >
        {props.title}
      </a>
    </li>
  )
}

export default Project
