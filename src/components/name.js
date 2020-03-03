import React from "react"

// const onEnter = e => {
//   e.target.innerHTML = "web developer <br/> harim1206@gmail.com"
// }

// const onLeave = e => {
//   e.target.innerText = "HARIM CHOI"
// }

const onHover = e => {
  const main = document.querySelector(".name__text--desktop__main")
  const sub = document.querySelector(".name__text--desktop__sub")
  
  if (e.type === "mouseenter") {
    main.classList.remove("visible")
    sub.classList.add("visible")
  } else {
    main.classList.add("visible")
    sub.classList.remove("visible")
  }

  // e.type === "mouseenter" ? name.classList.add("visible") : name.classList.remove("visible") 
}


const Name = props => {
  return (
    <div className="name">

      <div className="name__text name__text--mobile">
        HARIM CHOI <br/>
        <div className="name__text--mobile__sub">
          <span>Web Developer</span><br/>
          <span>harim1206@gmail.com</span>
        </div>
      </div>

      <div
        className="name__text name__text--desktop"
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        <span className="name__text--desktop__main visible">HARIM CHOI</span>
        <div className="name__text--desktop__sub">
          <span>Web Developer</span><br/>
          <span>harim1206@gmail.com</span>
        </div>
      </div>

    </div>
  )
}

export default Name
