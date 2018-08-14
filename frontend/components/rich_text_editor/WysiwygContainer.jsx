import { connect } from 'react-redux';
import WYSIWYG from './wysiwyg';


const mstp = (state, ownProps) => {
  let html = '';
  let information = "<p>1.	Slice the dates and take of the cores<br>2.	Press the 2 dates cut face to cut face.<br>3.	Wrap the first slice of bacon around.<br>4.	Turn around 90° and wrap the second slice around it.<br>5.	Pick one of the toothpicks horizontal through the package and the other one vertically.<br>6.	You're finished with the first dates and bacon wonder. Repeat with your other ingredients…</p>";
  if(ownProps.body !== '' && ownProps.body !== undefined){
    information = ownProps.body;
  }
  let htmlDoc = new DOMParser().parseFromString(html, 'text/html');
  let body = htmlDoc.querySelectorAll('body');
  debugger
  body[0].innerHTML = information;
  debugger
  return {
    instructionBody: body[0].innerHTML
  };
};

const mdtp = (dispatch) => {
  return {

  };
};

export default connect(mstp,mdtp)(WYSIWYG);
