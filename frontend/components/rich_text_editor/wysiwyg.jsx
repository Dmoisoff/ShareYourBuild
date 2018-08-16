import React from 'react';
import { withRouter } from 'react-router-dom';


class WYSIWYG extends React.Component{
  constructor(props){
    super(props);
    this.ifr;
    this.refNumber = this.props.step - 1;
    this.state = {
      instructionBody: this.props.instructionBody
    };
  }

    shouldComponentUpdate() {
      debugger
   return false;
  }

   componentDidMount(){
     debugger
     this.ifr = document.getElementById(`theWYSIWYG-${this.refNumber}`).contentDocument;
     this.ifr.designMode = 'on';

     document.getElementById(`boldButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('Bold', false, null);
       this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
         this.props.updateDescription(this.state.instructionBody))
       );
       }, false);

     document.getElementById(`italicButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('italic', false, null);
       this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
         this.props.updateDescription(this.state.instructionBody))
       );
       }, false);

     document.getElementById(`underlineButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('underline', false, null);
       this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
         this.props.updateDescription(this.state.instructionBody))
       );
       }, false);

     document.getElementById(`orderedListButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('InsertOrderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
       this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
         this.props.updateDescription(this.state.instructionBody))
       );
     }, false);

     document.getElementById(`unorderedListButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('InsertUnorderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
       this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
         this.props.updateDescription(this.state.instructionBody))
       );
     }, false);

     if(this.state.instructionBody){
       this.ifr.getElementsByTagName('body')[0].innerHTML = this.state.instructionBody;
     }
     this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML});

     this.ifr.getElementsByTagName('body')[0].onblur = () => {
       this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
         this.props.updateDescription(this.state.instructionBody))
       );
     };
  }


   componentWillUnmount() {
     document.getElementById(`boldButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('Bold', false, null);
       }, false);

     document.getElementById(`italicButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('italic', false, null);
       }, false);

     document.getElementById(`underlineButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('underline', false, null);
       }, false);

     document.getElementById(`orderedListButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('InsertOrderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
     }, false);

     document.getElementById(`unorderedListButton-${this.refNumber}`).addEventListener('click',() => {
       this.ifr.execCommand('InsertUnorderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
     }, false);
   }


  render(){
    debugger
    return (
      <div id='textEditor'>
        <div id='theRibbon'>
          <button id={`boldButton-${this.refNumber}`} title='bold'><b>B</b></button>
          <button id={`italicButton-${this.refNumber}`} title='italic'><em>I</em></button>
          <button id={`underlineButton-${this.refNumber}`} title='underline'><u>U</u></button>
          <button id={`orderedListButton-${this.refNumber}`} title='Numbered list'>(i)</button>
          <button id={`unorderedListButton-${this.refNumber}`} title='Bulleted list'>&bull;</button>
        </div>
        <div id='richTextArea'>
          <iframe id={`theWYSIWYG-${this.refNumber}`} className='theWYSIWYG' name='theWYSIWYG' frameBorder='0' ref={(f) => this.ifr = f}></iframe>
        </div>
      </div>
    );
  }
}


export default WYSIWYG;
