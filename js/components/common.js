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

// const Navigation=()=>{
// 	return(
// 		<nav class="flex">

// 			<div class="logo">
// 				<a href="index.html"><img src="img/base/logo.svg"/><p>Shucong Yuan</p></a>
// 			</div>
// 			<div class="flex links-nav">
// 				<a id="link-gallery" href="index.html">Gallery</a>
// 				<a id="link-about" href="about.html">About Me</a>
// 				<a id="link-resume" href="resume.html">Resume</a>
// 			</div>
// 			<div class="links-external">
// 				<a  class="flex flex-align-center" href="https://github.com/stoneYuan3"><img src="img/base/link-github.svg"/>My Github</a>
// 				<a  class="flex flex-align-center" href="https://www.linkedin.com/in/jack-yuan-10a269222/"><img src="img/base/link-linkedin.svg"/>My Linkedin</a>
// 			</div>

// 			<div class="links-external links-external-small">
// 				<a  class="flex flex-align-center" href="https://github.com/stoneYuan3"><img src="img/base/link-github.svg"/></a>
// 				<a  class="flex flex-align-center" href="https://www.linkedin.com/in/jack-yuan-10a269222/"><img src="img/base/link-linkedin.svg"/></a>					
// 			</div>
// 		</nav>

// 	);
// }