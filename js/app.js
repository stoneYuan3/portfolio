
const urlParams = new URLSearchParams(window.location.search);
const target = urlParams.get('content');
const galleryPage = urlParams.get('gpage');
const worktype = urlParams.get('worktype');

var page_title=document.getElementsByTagName('h1')[0];

var section_showRoom=document.getElementsByClassName('section-contentDisplay')[0];

const changeNavStatus = (target)=>{

  switch(target){
  case "gallery":
    document.getElementById("link-gallery").classList.add("style-selected");
    document.getElementById("link-about").classList.remove("style-selected");
    document.getElementById("link-resume").classList.remove("style-selected"); 
    break;   
  case "about":
    document.getElementById("link-gallery").classList.remove("style-selected");
    document.getElementById("link-about").classList.add("style-selected");
    document.getElementById("link-resume").classList.remove("style-selected");    
    break;
  case "resume":
    document.getElementById("link-gallery").classList.remove("style-selected");
    document.getElementById("link-about").classList.remove("style-selected");
    document.getElementById("link-resume").classList.add("style-selected");    
    break;
  case "none":
    document.getElementById("link-gallery").classList.remove("style-selected");
    document.getElementById("link-about").classList.remove("style-selected");
    document.getElementById("link-resume").classList.remove("style-selected");    
  }

}


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

if(target == null || galleryPage!=null){

  changeNavStatus("gallery"); 

  ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Navgallery, null)), document.getElementById("react-nav-gallery"));

}
if( !(target == null || target == "about" || target=="resume") ){
    changeNavStatus("none");

}

switch(target){
  case null:
    changeNavStatus("gallery");  
    break;

  case "about":
    changeNavStatus("about");   

    page_title.innerHTML='About Me';
    sendXHR("GET", "./articles/about.txt", null, (response)=>{
      section_showRoom.innerHTML=response;
    });

    break;

  case "resume":
    changeNavStatus("resume");

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

  case "isaBanner":
    page_title.innerHTML="Research Institute Website Banners";
    ReactDOM.render(/*#__PURE__*/React.createElement(WorkIntroGraphicDes, {
        type: "Graphic Design",
        skills: "Photoshop",
        context: "Internship Project, Individual, 2022"
      }), document.getElementById("root")
    );

    sendXHR("GET", "./articles/works/graphic/isaBanner.txt", null, (response)=>{
      document.getElementById('section-work-body').innerHTML=response;
    });
    break;
  case "cmcSermon":
    page_title.innerHTML="Church Sunday Sermon Posters";
    ReactDOM.render(/*#__PURE__*/React.createElement(WorkIntroGraphicDes, {
        type: "Graphic Design",
        skills: "Photoshop | Illustrator | Tablet Drawing",
        context: "Volunteer Project, Individual, 2021"
      }), document.getElementById("root")
    );

    sendXHR("GET", "./articles/works/graphic/cmcSermon.txt", null, (response)=>{
      document.getElementById('section-work-body').innerHTML=response;
    });
    break;
}

switch(galleryPage){
  case null:
      if(target==null){
         ReactDOM.render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.StrictMode, null, 
        /*#__PURE__*/React.createElement(WorkPrev, {
          href: "index.html?worktype=programming&content=riskmap",
          imgSrc: "img/banner-riskmap.png",
          title: "529 Garage Risk Map Project",
          type: "Full Stack Website",
          skills: "HTML | CSS | JQuery | PHP | MySQL",
          context: "School Project, Individual, 2022"
        }), 
        /*#__PURE__*/React.createElement(WorkPrev, {
          href: "index.html?worktype=programming&content=garage",
          imgSrc: "img/banner-garage.png",
          title: "Garage, Artwork Sharing Platform",
          type: "Full Stack Website",
          skills: "HTML | CSS | JQuery | PHP | MySQL",
          context: "School Project, Group, 2022"
        }),
        /*#__PURE__*/React.createElement(WorkPrev, {
          href: "index.html?worktype=programming&content=edusim",
          imgSrc: "img/banner-edusim.png",
          title: "PRC Education Simulator",
          type: "Java Mini Game",
          skills: "Java",
          context: "School Project, Individual, 2020"
        })
        )), document.getElementById("root"));       
      }

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

    ReactDOM.render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.StrictMode, null, 
    /*#__PURE__*/React.createElement(WorkPrev, {
      href: "index.html?worktype=art&content=isaBanner",
      imgSrc: "img/banner-isaBanners.png",
      title: "Research Institute Website Banners",
      type: "Graphic Design",
      skills: "Photoshop",
      context: "Internship Project, Individual, 2022"
    }),
    /*#__PURE__*/React.createElement(WorkPrev, {
      href: "index.html?worktype=art&content=cmcSermon",
      imgSrc: "img/banner-cmcSermon.png",
      title: "Church Sunday Sermon Posters",
      type: "Graphic Design",
      skills: "Photoshop | Illustrator | Tablet Drawing",
      context: "Volunteer Project, Individual, 2021"
    }), 
    )), document.getElementById("root"));

    break;
}

if(worktype!=null && target!=null){
  switch (worktype){
    case "programming":
      var newElement = document.createElement("a");
      newElement.setAttribute("href", "index.html");
      newElement.classList.add("button-general");
      newElement.innerHTML = "<<< Back to Gallery";

      // Insert the new element after the existing element
      document.getElementById('title').insertAdjacentElement("afterend", newElement);
      break;    
    case "art":
      var newElement = document.createElement("a");
      newElement.classList.add("button-general");
      newElement.setAttribute("href", "index.html?gpage=art");
      newElement.innerHTML = "<<< Back to Gallery";

      // Insert the new element after the existing element
      document.getElementById('title').insertAdjacentElement("afterend", newElement);
      break;
  }
}

