import React, { Component } from "react"

import Layout from "../components/layout"
import Main from "../components/main"
import Name from "../components/name"
import Preview from "../components/preview"
import "../styles/main.scss"

// import data from '../assets/data'
import {
  bbImg,
  ttImg,
  bttmImg,
  otdImg,
  ttffImg,
  nwGif,
  harimImg
} from '../assets/images'


class IndexPage extends Component {
  
  state = {
    data: {
      bollandbranch: {
        title: "Boll & Branch",
        href: "https://www.bollandbranch.com",
        img: bbImg,
      },
      tenpastten: {
        title: "10 Past Ten",
        href: "http://www.10pastten.com",
        img: ttImg,
      },
      baboontothemoon:  {
        title: "Baboon to the Moon",
        href: "https://www.baboontothemoon.com",
        img: bttmImg,
      },
      onthedash: {
        title: "On The Dash",
        href: "http://www.onthedash.com",
        img: otdImg,
      },
      thirtythree: {
        title: "33/45",
        href: "https://thirtythreefourtyfive.herokuapp.com",
        img: ttffImg,
      },
      nightsandweekends: {
        title: "Nights & Weekends",
        href: "https://www.nightsandweekends.info",
        img: nwGif,
      },
      resume: {
        title: "Resume",
        href: "https://drive.google.com/file/d/1SdRH1QKfvYaV9ruFuq_8xV931XNrW5zr/view",
        img: harimImg,
      }
    }
  }

  onHover = e => {
    const project = e.target.getAttribute("data-project")
    const previewImg = document.querySelector(`img[data-project='${project}']`)

    e.type === "mouseenter" ? previewImg.classList.add("visible") : previewImg.classList.remove("visible") 
  }

  render() {

    return (
      <Layout>
        <div className="container site-wrapper">
          <Name />
          <Main projects={this.state.data} onHover={this.onHover} />
          <Preview projects={this.state.data}/>
        </div>
      </Layout>
    )
  }
}

export default IndexPage