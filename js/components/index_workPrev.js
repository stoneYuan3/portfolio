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

// const WorkPrev = (props) => {
//   return (
//     <section className="flex flex-row section-galleryWork">
//     <a href={props.href}>
//     <img src={props.imgSrc} />
//     </a>
//     <div className="flex flex-column">
//     <h2>{props.title}</h2>
//     <p id="work-type" className="p-type">{props.type}</p>
//     <p>{props.skills}</p>
//     <p>{props.context}</p>
//     </div>
//     </section>
//     );
// };

// export default workPrev;
