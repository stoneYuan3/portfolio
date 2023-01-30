"use strict";

const WorkPrev = props => {
  return /*#__PURE__*/React.createElement("section", {
    className: "flex flex-row section-galleryWork"
  }, /*#__PURE__*/React.createElement("a", {
    href: props.href
  }, /*#__PURE__*/React.createElement("img", {
    src: props.imgSrc
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-column"
  }, /*#__PURE__*/React.createElement("h2", null, props.title), /*#__PURE__*/React.createElement("p", {
    id: "work-type",
    className: "p-type"
  }, props.type), /*#__PURE__*/React.createElement("p", null, props.skills), /*#__PURE__*/React.createElement("p", null, props.context)));
};
