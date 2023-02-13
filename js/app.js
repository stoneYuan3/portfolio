
const urlParams = new URLSearchParams(window.location.search);
const target = urlParams.get('content');

var page_title=document.getElementsByTagName('h1')[0];

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
    document.getElementById("link-gallery").classList.add("style-selected");
    document.getElementById("link-about").classList.remove("style-selected");
    document.getElementById("link-resume").classList.remove("style-selected");    

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
    document.getElementById("link-about").classList.add("style-selected");
    document.getElementById("link-gallery").classList.remove("style-selected");
    document.getElementById("link-resume").classList.remove("style-selected");    

    page_title.innerHTML='About Me';
    sendXHR("GET", "./articles/about.txt", null, (response)=>{
      section_showRoom.innerHTML=response;
    });

    break;

  case "resume":
    document.getElementById("link-resume").classList.add("style-selected");
    document.getElementById("link-gallery").classList.remove("style-selected");
    document.getElementById("link-about").classList.remove("style-selected");  

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

  case "uiux":
    document.getElementById("link-web").classList.remove("style-selected");
    document.getElementById("link-uiux").classList.add("style-selected");
    document.getElementById("link-art").classList.remove("style-selected");   
    break;
  case "art":
    document.getElementById("link-web").classList.remove("style-selected");
    document.getElementById("link-uiux").classList.remove("style-selected");
    document.getElementById("link-art").classList.add("style-selected");   
    break;
}

if( !(target == null || target == "about" || target=="resume") ){
    document.getElementById("link-resume").classList.remove("style-selected");
    document.getElementById("link-gallery").classList.remove("style-selected");
    document.getElementById("link-about").classList.remove("style-selected");  
}
