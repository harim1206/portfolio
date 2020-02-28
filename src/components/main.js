import React from 'react'
import Project from './project'


const Main = (props) =>{

  return (
    <ul className="main ">
      {
        props.projects.map( project => {
          return <Project href={project.href} title={project.title} />
        })
      }
    </ul>
  )
}

export default Main;