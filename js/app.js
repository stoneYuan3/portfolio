// import MyComponent from "./nav.js"
// require("./components/index_workPrev.js");

// import workPrev from "./components/index_workPrev.js";

// import WorkPreview from './components/index_workPrev';

// const fs=require('fs');
// import * as fs from './fs';

const urlParams = new URLSearchParams(window.location.search);
const target = urlParams.get('content');

var page_title=document.getElementsByTagName('h1')[0];
var link_gallery=document.getElementById('link-gallery');
var link_about=document.getElementById('link-about');
var link_resume=document.getElementById('link-resume');

var section_showRoom=document.getElementsByClassName('section-contentDisplay')[0];

function sendXHR(type, url, data, callback) {
  var newXHR = new XMLHttpRequest() || new window.ActiveXObject("Microsoft.XMLHTTP");
  newXHR.open(type, url, true);
  newXHR.send(data);
  newXHR.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
      callback(this.response);
    }
  };
}

"use strict";

ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Navigation, null)), document.getElementById("react_nav"));

switch(target){
  case null:
    ReactDOM.render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.StrictMode, null, 
      /*#__PURE__*/React.createElement(WorkPrev, {
        href: "index.html?content=riskmap",
        imgSrc: "img/banner-riskmap.png",
        title: "529 Garage Risk Map Project",
        type: "Full Stack Website",
        skills: "HTML | CSS | JQuery | PHP | MySQL",
        context: "School Project, Individual, 2022"
      }), 
      /*#__PURE__*/React.createElement(WorkPrev, {
        href: "index.html?content=garage",
        imgSrc: "img/banner-garage.png",
        title: "Garage, Artwork Sharing Platform",
        type: "Full Stack Website",
        skills: "HTML | CSS | JQuery | PHP | MySQL",
        context: "School Project, Group, 2022"
      }),
      /*#__PURE__*/React.createElement(WorkPrev, {
        href: "index.html?content=edusim",
        imgSrc: "img/banner-edusim.png",
        title: "PRC Education Simulator",
        type: "Java Mini Game",
        skills: "Java",
        context: "School Project, Individual, 2020"
      })
      )), document.getElementById("root"));
    break;

  case "about":
    page_title.innerHTML='About Me';
    sendXHR("GET", "./articles/about.txt", null, (response)=>{
      section_showRoom.innerHTML=response;
    });

    break;

  case "resume":
    page_title.innerHTML='Resume';
    sendXHR("GET", "./articles/resume.txt", null, (response)=>{
      section_showRoom.innerHTML=response;
    });
    break;

  case "riskmap":
    page_title.innerHTML="529 Garage Risk Map";
    ReactDOM.render(/*#__PURE__*/React.createElement(WorkIntro, {
        imgSrc: "img/banner-riskmap.png",
        githubLink: "https://github.com/stoneYuan3/529-Garage-Risk-Map",
        type: "Full Stack Website",
        skills: "HTML | CSS | JQuery | PHP | MySQL",
        context: "School Project, Individual, 2022",
      }), document.getElementById("root")
    );

    sendXHR("GET", "./articles/works/riskmap.txt", null, (response)=>{
      document.getElementById('section-work-body').innerHTML=response;
    });
    break;

  case "garage":
    page_title.innerHTML="Garage, Artwork Sharing Platform";
    ReactDOM.render(/*#__PURE__*/React.createElement(WorkIntro, {
        imgSrc: "img/banner-garage.png",
        githubLink: "https://github.com/stoneYuan3/IAT352-finalProject",
        type: "Full Stack Website",
        skills: "HTML | CSS | JQuery | PHP | MySQL",
        context: "School Project, Group, 2022",
      }), document.getElementById("root")
    );

    sendXHR("GET", "./articles/works/garage.txt", null, (response)=>{
      document.getElementById('section-work-body').innerHTML=response;
    });
    break;

  case "edusim":
    page_title.innerHTML="PRC education simulator";
    ReactDOM.render(/*#__PURE__*/React.createElement(WorkIntro, {
        imgSrc: "img/banner-edusim.png",
        githubLink: "https://github.com/stoneYuan3/PRCeducationSimulator-IAT265Final",
        type: "Java Mini Game",
        skills: "Java",
        context: "School Project, Individual, 2020",
      }), document.getElementById("root")
    );

    sendXHR("GET", "./articles/works/edusim.txt", null, (response)=>{
      document.getElementById('section-work-body').innerHTML=response;
    });
    break;

}


// ReactDOM.render(
//   <React.StrictMode>
//   <Navigation/>
//   </React.StrictMode>,
//   document.getElementById("react_nav")
// );

// ReactDOM.render(
//   <React.Fragment>
//       <React.StrictMode>

//   <WorkPrev
//     href="work.html?work=riskmap"
//     imgSrc="img/banner-riskmap.png"
//     title="529 Garage Risk Map Project"
//     type="Full Stack Website"
//     skills="HTML | CSS | JQuery | PHP | MySQL"
//     context="School Project, Individual, 2022"
//   />
//   <WorkPrev
//     href="work.html?work=garage"
//     imgSrc="img/banner-garage.png"
//     title="Garage, Artwork Sharing Platform"
//     type="Full Stack Website"
//     skills="HTML | CSS | JQuery | PHP | MySQL"
//     context="School Project, Group, 2022"
//   />

//       </React.StrictMode>
//   </React.Fragment>,
//   document.getElementById("root")
// );

// ReactDOM.render(<MyComponent />, document.getElementById("root"));