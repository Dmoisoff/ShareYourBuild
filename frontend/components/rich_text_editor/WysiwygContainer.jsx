import { connect } from "react-redux";
import WYSIWYG from "./wysiwyg";

const mstp = (state, ownProps) => {
  let html = "";
  let information = "";
  if (ownProps.body !== "" && ownProps.body !== undefined) {
    information = ownProps.body;
  }
  let htmlDoc = new DOMParser().parseFromString(html, "text/html");
  let body = htmlDoc.querySelectorAll("body");
  body[0].innerHTML = information;
  return {
    instructionBody: body[0].innerHTML,
    updateDescription: ownProps.updateDescription,
    step: ownProps.step
  };
};

const mdtp = dispatch => {
  return {};
};

export default connect(
  mstp,
  mdtp
)(WYSIWYG);
