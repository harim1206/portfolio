import React, { Component } from "react"

import Layout from "../components/layout"
import Main from "../components/main"
import Name from "../components/name"
import Preview from "../components/preview"
import "../styles/main.scss"

import bbImg from '../assets/bollbranch.png'
import ttImg from '../assets/tenpastten.png'
import bttmImg from '../assets/baboontothemoon.png'
import otdImg from '../assets/onthedash.png'
import ttffImg from '../assets/thirtythreefourtyfive.png'
import nwGif from '../assets/nw.gif'
import harimImg from '../assets/harim.png'

class IndexPage extends Component {
  
  state = {
    
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

  onEnter = e => {
    const project = e.target.getAttribute("data-project")
    const previewImg = document.querySelector(".preview__image")
    previewImg.setAttribute("src", this.state[`${project}`].img)

  }

  onLeave = e => {
    const previewImg = document.querySelector(".preview__image")
    previewImg.setAttribute("src", "")
  }

  render() {

    return (
      <Layout>
        <div className="container site-wrapper">
          <Name />

          <Main
            projects={this.state}
            onEnter={this.onEnter}
            onLeave={this.onLeave}
          />

          <Preview />

        </div>
      </Layout>
    )
  }
}

export default IndexPage


    // this.setState(prevState => (
    //   {
    //     ...prevState,
    //     [project]: {
    //       ...prevState[`${project}`],
    //       hover: true
    //     }
    //   }
    // ), console.log("this.state: ", this.state))


//  bollandbranch: {
//       title: "Boll & Branch",
//       href: "https://www.bollandbranch.com",
//       img: bb,
//       hover: false,

//     },
//     tenpastten: {
//       title: "10 Past Ten",
//       href: "http://www.10pastten.com",
//       img: "",
//       hover: false,

//     },
//     baboontothemoon:  {
//       title: "Baboon to the Moon",
//       href: "https://www.baboontothemoon.com",
//       img: "",
//       hover: false,
//     },
//     onthedash: {
//       title: "On The Dash",
//       href: "http://www.onthedash.com",
//       img: "",
//       hover: false,
//     },
//     thirtythree: {
//       title: "33/45",
//       href: "https://thirtythreefourtyfive.herokuapp.com",
//       img: "",
//       hover: false,
//     },
//     nightsandweekends: {
//       title: "Nights & Weekends",
//       href: "https://www.nightsandweekends.info",
//       img: nw,
//       hover: false,
//     }





// projects: [
    //   {
    //     title: "Boll & Branch",
    //     href: "https://www.bollandbranch.com",
    //     img: bb,
    //     hover: false,
    //   },
    //   {
    //     title: "10 Past Ten",
    //     href: "http://www.10pastten.com",
    //     img: "",
    //     hover: false,
    //   },
    //   {
    //     title: "Baboon to the Moon",
    //     href: "https://www.baboontothemoon.com",
    //     img: "",
    //     hover: false,
    //   },
    //   {
    //     title: "On The Dash",
    //     href: "http://www.onthedash.com",
    //     img: "",
    //     hover: false,
    //   },
    //   {
    //     title: "33/45",
    //     href: "https://thirtythreefourtyfive.herokuapp.com",
    //     img: "",
    //     hover: false,
    //   },
    //   {
    //     title: "Nights & Weekends",
    //     href: "https://www.nightsandweekends.info",
    //     img: nw,
    //     hover: false,
    //   },
    // ],