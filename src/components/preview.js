import React from "react"

const Preview = props => {
  let imgArr = []

  for (let project in props.projects) {
    imgArr.push(
      <img 
        className="preview__image" 
        src={props.projects[project].img} 
        data-project={project}
        alt="" 
      />
    )
  }

  return (
    <div className="preview">
      {imgArr}
    </div>
  )
}

export default Preview
