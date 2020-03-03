import React from "react"
import Project from "./project"

const Main = props => {
  let listItems = []

  for (let project in props.projects) {
    listItems.push(
      <Project
        href={props.projects[project].href}
        title={props.projects[project].title}
        project={project}
        onHover={props.onHover}
      />
    )
  }

  return <ul className="main">{listItems}</ul>
}

export default Main
