import React, { useState } from 'react';
import { Carousel, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import "./fonts.css";

import restLogo from "./images/rest.png"
import reactLogo from "./images/react.svg"
import aspLogo from "./images/asp.png"
import cSharpLogo from "./images/csharplogo.png"
import css3Logo from "./images/css3.svg"
import html5Logo from "./images/html-five.svg"
import javaLogo from "./images/java.svg"
import javascriptLogo from "./images/javascript.svg"
import mysqlLogo from "./images/mysql.svg"
import androidstudioico from "./images/androidStudio.png"
import dockerLogo from "./images/dockerLogo.png"
import ContactForm from './contact';


export default function App(props) {

  const [index, setIndex] = useState(0);

  const handleSelectDirect = (indexNumber) => {
    setIndex(indexNumber);
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  function NavigationBar(props) {

    return (
      <Navbar expand="lg" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleSelectDirect(0)} className="nav-link-ltr">Home</Nav.Link>
            <Nav.Link onClick={() => handleSelectDirect(1)} className="nav-link-ltr">Education</Nav.Link>
            <Nav.Link onClick={() => handleSelectDirect(2)} className="nav-link-ltr">Work</Nav.Link>
            <Nav.Link onClick={() => handleSelectDirect(3)} className="nav-link-ltr">Lifestyle</Nav.Link>
            <Nav.Link onClick={() => handleSelectDirect(4)} className="nav-link-ltr">Contact</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }


  const [restV, setRestV] = useState(false);
  const [reactV, setReactV] = useState(false);
  const [aspV, setASPV] = useState(false);
  const [sharpV, setSharpV] = useState(false);
  const [cssV, setCssV] = useState(false);
  const [htmlV, setHtmlV] = useState(false);
  const [javaV, setJavaV] = useState(false);
  const [jsV, setJSV] = useState(false);
  const [msqlV, setMSQLV] = useState(false);
  const [astudioV, setAStudioV] = useState(false);
  const [dockerV, setDockerV] = useState(false);

  const handleVisibility = (id) => {
    switch (id) {
      case "restIco":
        setRestV(!restV);
        break;
      case "reactIco":
        setReactV(!reactV);
        break;
      case "aspIco":
        setASPV(!aspV);
        break;
      case "csharpIco":
        setSharpV(!sharpV);
        break;
      case "cssIco":
        setCssV(!cssV);
        break;
      case "htmlIco":
        setHtmlV(!htmlV);
        break;
      case "javaIco":
        setJavaV(!javaV);
        break;
      case "jsIco":
        setJSV(!jsV);
        break;
      case "mysqlIco":
        setMSQLV(!msqlV);
        break;
      case "androidIco":
        setAStudioV(!astudioV)
        break;
      case "dockerIco":
        setDockerV(!dockerV)
    }
  }


  return (
    <>
      <main id="parent">
        <Carousel activeIndex={index} interval={null} fade="true" onSelect={handleSelect}>
          <Carousel.Item className="carouselInner home-bg">
            <NavigationBar/>
            <div className="homeContainer">
              <h1>Xander Drinnan</h1>
              <h2>Programming for My Community</h2>
              <img alt="RESTful Logo" id="restIco" src={restLogo} onMouseOver={() => handleVisibility("restIco")} onFocus={() => handleVisibility("restIco")} onMouseOut={() => handleVisibility("restIco")} onBlur={() => handleVisibility("restIco")} />

              <img alt="REACT.js Logo" id="reactIco" src={reactLogo} onMouseOver={() => handleVisibility("reactIco")} onFocus={() => handleVisibility("reactIco")} onMouseOut={() => handleVisibility("reactIco")} onBlur={() => handleVisibility("reactIco")} />
              <img alt="ASP.NET Logo" id="aspIco" src={aspLogo} onMouseOver={() => handleVisibility("aspIco")} onFocus={() => handleVisibility("aspIco")} onMouseOut={() => handleVisibility("aspIco")} onBlur={() => handleVisibility("aspIco")} />
              <img alt="C Sharp Logo" id="csharpIco" src={cSharpLogo} onMouseOver={() => handleVisibility("csharpIco")} onFocus={() => handleVisibility("csharpIco")} onMouseOut={() => handleVisibility("csharpIco")} onBlur={() => handleVisibility("csharpIco")} />
              <img alt="CSS3 Logo" id="cssIco" src={css3Logo} onMouseOver={() => handleVisibility("cssIco")} onFocus={() => handleVisibility("cssIco")} onMouseOut={() => handleVisibility("cssIco")} onBlur={() => handleVisibility("cssIco")} />
              <img alt="HTML5 Logo" id="htmlIco" src={html5Logo} onMouseOver={() => handleVisibility("htmlIco")} onFocus={() => handleVisibility("htmlIco")} onMouseOut={() => handleVisibility("htmlIco")} onBlur={() => handleVisibility("htmlIco")} />
              <img alt="JavaSpringboot Logo" id="javaIco" src={javaLogo} onMouseOver={() => handleVisibility("javaIco")} onFocus={() => handleVisibility("javaIco")} onMouseOut={() => handleVisibility("javaIco")} onBlur={() => handleVisibility("javaIco")} />
              <img alt="JavaScript Logo" id="jsIco" src={javascriptLogo} onMouseOver={() => handleVisibility("jsIco")} onFocus={() => handleVisibility("jsIco")} onMouseOut={() => handleVisibility("jsIco")} onBlur={() => handleVisibility("jsIco")} />
              <img alt="MySQL Logo" id="mysqlIco" src={mysqlLogo} onMouseOver={() => handleVisibility("mysqlIco")} onFocus={() => handleVisibility("mysqlIco")} onMouseOut={() => handleVisibility("mysqlIco")} onBlur={() => handleVisibility("mysqlIco")} />
              <img alt="Android Studio Logo" id="androidIco" src={androidstudioico} onMouseOver={() => handleVisibility("androidIco")} onFocus={() => handleVisibility("androidIco")} onMouseOut={() => handleVisibility("androidIco")} onBlur={() => handleVisibility("androidIco")} />
              <img alt="Docker Logo" id="dockerIco" src={dockerLogo} onMouseOver={() => handleVisibility("dockerIco")} onFocus={() => handleVisibility("dockerIco")} onMouseOut={() => handleVisibility("dockerIco")} onBlur={() => handleVisibility("dockerIco")} />

              <p id="RESTInfo" style={{ visibility: restV ? "visible" : "hidden" }}>Experience with RESTful for Weather.com and Google API's</p>
              <p id="REACTInfo" style={{ visibility: reactV ? "visible" : "hidden" }}>This website was built using ReactJS. I also have experience with Gatsby.</p>
              <p id="ASPInfo" style={{ visibility: aspV ? "visible" : "hidden" }}>Three years experience with Razor pages, MVC establishment and CRUD creation.</p>
              <p id="CSharpInfo" style={{ visibility: sharpV ? "visible" : "hidden" }}>Three years experience with a strong understanding of object-oriented design and best practices.</p>
              <p id="CSS3Info" style={{ visibility: cssV ? "visible" : "hidden" }}>CSS3 does the majority of the legwork in this. I also have equal experience using SASS (SCSS)</p>
              <p id="HTML5Info" style={{ visibility: htmlV ? "visible" : "hidden" }}>HTML5 is self-explanatory. It is the basis of the web development work I do, including in this website.</p>
              <p id="JavaInfo" style={{ visibility: javaV ? "visible" : "hidden" }}>I have extensive experience with both Java utilizing servlets, but most notably Springboot MVC for modern
                standards using Maven.</p>
              <p id="JavaScriptInfo" style={{ visibility: jsV ? "visible" : "hidden" }}>Three years experience with pure JavaScript, as well as its close relation with ReactJS.</p>
              <p id="MySQLInfo" style={{ visibility: msqlV ? "visible" : "hidden" }}>I have a wealth of valuable and high-level database management skills with SQL and PLSQL.</p>
              <p id="AndroidInfo" style={{ visibility: astudioV ? "visible" : "hidden" }}>One course worth of experience using Android Studio to create basic applications with Java and Gradle.</p>
              <p id="DockerInfo" style={{ visibility: dockerV ? "visible" : "hidden" }}>I know the basics in initially Dockerizing applications through Linux and Windows containers.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carouselInner education-bg">
            <NavigationBar />
            <div className="carouselContainer" id="education">
              <div className="innerContainer">
                <h3>September 2012 - June 2016</h3>
                <p>
                 Brant Collegiate Institute - Brantford, Ontario
                </p>
                <p>
                  Diplôme d'Immersion Français/<span style={{color: "#FF6800"}}>French Immersion Diploma.</span>
                  </p>
              </div>
              <div className="innerContainer">
                <h3>September 2017 - April 2020</h3>
                <p>Conestoga College - Kitchener/Waterloo, Ontario</p>
                <p>
                <span style={{color: "#FF6800"}}>Associate's Degree</span> &bull; <span style={{color: "#FFF300"}}>Computer Programmer/Analyst program.</span>
            </p>
              </div>

            </div>
          </Carousel.Item>
          <Carousel.Item className="carouselInner work-bg">
            <NavigationBar />
            <div className="carouselContainer" id="workHistory">
              <div className="innerContainer">
                <h3>February 2017 - August 2017</h3>
                <p>
                  <span style={{color: "#FFF300"}}>YMCA</span> of Hamilton/Burlington/Brantford - Educator & Camp Counselor
              </p>
                <p><span style={{color: "#FF6800"}}>Supervision</span> &bull; De-escalation &bull; Large Activity Management &bull; <span style={{color: "#FF6800"}}>Confidentiality</span> &bull;
                 <span style={{color: "#FF6800"}}> CPR</span></p>
              </div>
              <div className="innerContainer">
                <h3>June 2018 - August 2018</h3>
                <p>
                <span style={{color: "#FFF300"}}>City of Kitchener - Youth Leader</span>
                </p>
                <p>Leadership & <span style={{color: "#FF6800"}}>Accountability</span> &bull; Interpersonal Relationship Building &bull; Safety and Hazard Awareness</p>
              </div>
              <div className="innerContainer">
              <h3>April 2019 - August 2019</h3>
                <p>
                <span style={{color: "#FFF300"}}>Conestoga College - Software Support Technician</span>
          </p>
                <p>Software & Hardware Support &bull; <span style={{color: "#FF6800"}}>Networking</span> &bull; <span style={{color: "#FF6800"}}>Sysadmin</span></p>
              </div>
            </div>

          </Carousel.Item>
          <Carousel.Item className="carouselInner hobbies-bg" id="hobbies">
            <NavigationBar />
            <div className="carouselContainer" id="hobbiesContainer">
              <div className="innerContainer">
                <h3>Culinary Arts</h3>
                <p>
                  Cooking &bull; Baking &bull; Finely Crafted Knives from Japan and Canada &bull; <span style={{color: "#FF6800"}}>Healthy Eating</span>
                </p>
              </div>
              <div className="innerContainer">
                <h3><span style={{color: "#FFF300"}}>Powerlifting</span> & Strongman</h3>
                <p>
                Competitive Level Strength &bull; <span style={{color: "#FF6800"}}>Passion for Improvement</span> &bull; Drive to Succeed
                </p>
                <p>
                Bench Press Peak: 285LBs &bull; Deadlift Peak: 495LBs &bull; Squat Peak: 395LBs
                </p>
              </div>
              <div className="innerContainer">
                <h3>Fashion, Always Ethically Made with <span style={{color: "#FFF300"}}>Canada First</span></h3>
                <p>
                <span style={{color: "#FF6800"}}>Supporting Canadian Business</span> &bull; Supporting Ethically Made Clothing &bull; Looking Good Doing So!
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carouselInner contact-bg">
            <NavigationBar />
            <ContactForm />
          </Carousel.Item>
        </Carousel>
      </main>

    </>
  );
}
