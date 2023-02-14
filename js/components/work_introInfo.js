"use strict";

const WorkIntro=(props)=>{
	return /*#__PURE__*/React.createElement("div", {
		  class: "flex flex-column section-work"
		}, /*#__PURE__*/React.createElement("img", {
		  id: "banner",
		  src: props.imgSrc
		}), /*#__PURE__*/React.createElement("a", {
		  id: "link-work-github",
		  class: "flex flex-align-center",
		  href: props.githubLink
		}, /*#__PURE__*/React.createElement("img", {
		  src: "img/base/link-github.svg"
		}), 

		"Github link"), /*#__PURE__*/React.createElement("div", {
		  class: "section-work-basics"
		}, /*#__PURE__*/React.createElement("p", {
		  id: "work-type",
		  class: "p-type"
		}, props.type), /*#__PURE__*/React.createElement("p", {
		  id: "work-skill"
		}, props.skills), /*#__PURE__*/React.createElement("p", {
		  id: "work-desc"
		}, 

		props.context)), /*#__PURE__*/React.createElement("div", {
		  id: "section-work-body"
		})

		);

}

const WorkIntroGraphicDes=(props)=>{
	return /*#__PURE__*/React.createElement("div", {
		  class: "flex flex-column section-work"
		},  /*#__PURE__*/React.createElement("div", {
		  class: "section-work-basics graphic"
		}, /*#__PURE__*/React.createElement("p", {
		  id: "work-type",
		  class: "p-type"
		}, props.type), /*#__PURE__*/React.createElement("p", {
		  id: "work-skill"
		}, props.skills), /*#__PURE__*/React.createElement("p", {
		  id: "work-desc"
		}, 

		props.context)), /*#__PURE__*/React.createElement("div", {
		  id: "section-work-body"
		})

		);

}