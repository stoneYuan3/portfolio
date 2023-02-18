"use strict";

const Navigation = () => {
  return /*#__PURE__*/React.createElement("nav", {
  class: "flex"
}, 

/*#__PURE__*/React.createElement("div", {
  class: "logo"
}, /*#__PURE__*/React.createElement("a", {
  href: "index.html"
}, /*#__PURE__*/React.createElement("img", {
  src: "img/base/logo.svg"
}), /*#__PURE__*/React.createElement("p", null, "Shucong Yuan"))),

 /*#__PURE__*/React.createElement("div", {
  class: "flex links-nav"
}, /*#__PURE__*/React.createElement("a", {
  id: "link-gallery",
  href: "index.html"
}, "Gallery"), /*#__PURE__*/React.createElement("a", {
  id: "link-about",
  href: "index.html?content=about"
}, "About Me"), /*#__PURE__*/React.createElement("a", {
  id: "link-resume",
  href: "index.html?content=resume"
}, "Resume")),

 /*#__PURE__*/React.createElement("div", {
  class: "links-external"
}, /*#__PURE__*/React.createElement("a", {
  class: "flex flex-align-center",
  href: "https://github.com/stoneYuan3"
}, /*#__PURE__*/React.createElement("img", {
  src: "img/base/link-github.svg"
}), "My Github"), /*#__PURE__*/React.createElement("a", {
  class: "flex flex-align-center",
  href: "https://www.linkedin.com/in/jack-yuan-10a269222/"
}, /*#__PURE__*/React.createElement("img", {
  src: "img/base/link-linkedin.svg"
}), "My Linkedin")),

 /*#__PURE__*/React.createElement("div", {
  class: "links-external links-external-small"
}, /*#__PURE__*/React.createElement("a", {
  class: "flex flex-align-center",
  href: "https://github.com/stoneYuan3"
}, /*#__PURE__*/React.createElement("img", {
  src: "img/base/link-github.svg"
})), /*#__PURE__*/React.createElement("a", {
  class: "flex flex-align-center",
  href: "https://www.linkedin.com/in/jack-yuan-10a269222/"
}, /*#__PURE__*/React.createElement("img", {
  src: "img/base/link-linkedin.svg"
})))
);
};


const Navgallery = () => {

  //const variables and useEffect used to change the UI of nav upon clicking to a new tab
  const[currentPage,setPage]=React.useState("link-web");
  const indexPage="programming";
  React.useEffect(()=>{
    switch(currentPage){
      case "link-web":
        document.getElementById("link-web").classList.add("style-selected");
        document.getElementById("link-art").classList.remove("style-selected");
        break;
      case "link-art":
        document.getElementById("link-web").classList.remove("style-selected");
        document.getElementById("link-art").classList.add("style-selected");
    }

  },[currentPage]);


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    id: "link-web",
    onClick:()=>resetPage("programming",setPage)
  }, "Programming Related"), /*#__PURE__*/React.createElement("button", {
    id: "link-art",
    onClick:()=>resetPage("art",setPage)
  }, "Artworks"));

};



//reset contents based on tab selection
const resetPage=(page,setPage)=>{
  switch(page){
    case "programming":
      setPage("link-web");
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
      break;
    case "art":
      setPage("link-art");
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
}