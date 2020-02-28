import React from "react"

import Layout from "../components/layout"
import main from "../styles/main.scss"


const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="header">Harim Choi</div>

      <div className="main">
        <a href="www.bollandbranch.com"><div className="project">Boll & Branch</div></a>
        <a href="www.10pastten.com"><div className="project">10 Past Ten</div></a>
        <a href="www.baboontothemoon.com"><div className="project">Baboon To The Moon</div></a>
        <a href="www.onthedash.com"><div className="project">On The Dash</div></a>
        <a href="thirtythreefourtyfive.herokuapp.com"><div className="project">33/45</div></a>
        <a href="www.nightsandweekends.info"><div className="project">Nights & Weekends</div></a>
      </div>
    
    </div>    
    
  </Layout>
)

export default IndexPage
/*

Boll and Branch
10PastTen
OnTheDash
BaboonToTheMoon
33/45
Nights and Weekends
*/