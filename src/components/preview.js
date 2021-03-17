import React from "react"

const Preview = props => {
  let imgArr = []

  for (let project in props.projects) {
    const imgSrc = props.projects[project].img 
    imgArr.push(
      <img
        className="preview__image"
        src={imgSrc}
        alt=""
        sizes="100vw"
        data-project={project}
        srcset={`${imgSrc}  400w,
                ${imgSrc}  600w,
                ${imgSrc}  800w`}/>
    )
  }

  return (
    <div className="preview">
      {imgArr}
    </div>
  )
}

export default Preview
