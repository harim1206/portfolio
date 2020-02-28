import React, { Component } from "react"

import Layout from "../components/layout"
import Main from "../components/main"
import "../styles/main.scss"

class IndexPage extends Component {
  
  constructor(props) {
    super(props); 
    
    this.state = {
      projects: [
        {
          title: "Boll & Branch",
          href: "https://www.bollandbranch.com"
        },
        {
          title: "10 Past Ten",
          href: "http://www.10pastten.com"
        },
        {
          title: "Baboon to the Moon",
          href: "https://www.baboontothemoon.com"
        },
        {
          title: "On The Dash",
          href: "http://www.onthedash.com"
        },
        {
          title: "33/45",
          href: "https://thirtythreefourtyfive.herokuapp.com"
        },
        {
          title: "Nights & Weekends",
          href: "https://www.nightsandweekends.info"
        },
      ]

    }
  }

  render() {
    return (
      <Layout>
        <div className="container site-wrapper">
          <div className="header">
            <div className="name">HARIM CHOI</div>
          
          </div>
          
          <Main projects={this.state.projects} />
        
        </div>    
        
      </Layout>
    )
  }
}


export default IndexPage
/*

Boll and Branch
10PastTen
OnTheDash
BaboonToTheMoon
33/45
Nights and Weekends
*/