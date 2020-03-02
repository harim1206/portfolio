import React from "react"

const onEnter = e => {
  e.target.innerText = "harim1206@gmail.com"
}

const onLeave = e => {
  e.target.innerText = "HARIM CHOI"
}


const Name = props => {
  return (
    <div className="name">
      <div
        className="name__text name__text--desktop"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >HARIM CHOI</div>
      <div className="name__text name__text--mobile">
        HARIM CHOI <br/>
        <span>harim1206@gmail.com</span>
      </div>
    </div>
  )
}

export default Name
