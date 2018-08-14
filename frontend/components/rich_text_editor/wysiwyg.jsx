import React from 'react';
import { withRouter } from 'react-router-dom';


class WYSIWYG extends React.Component{
  constructor(props){
    super(props);
    this.ifr;
    this.state = {
      instructionBody: this.props.instructionBody
    };
  }
// instructionBody: this.ifr.contentDocument.body

    shouldComponentUpdate() {
      debugger
   return false;
  }

  // componentWillReceiveProps(nextProps) {
  //    if (this.props !== nextProps){
  //    // send message...
  //    }
  //  }



   componentDidMount(){
     this.ifr = document.querySelectorAll('iframe')[0].contentDocument;
     this.ifr.designMode = 'on';

     document.getElementById('boldButton').addEventListener('click',() => {
       this.ifr.execCommand('Bold', false, null);
       }, false);

     document.getElementById('italicButton').addEventListener('click',() => {
       this.ifr.execCommand('italic', false, null);
       }, false);

     document.getElementById('underlineButton').addEventListener('click',() => {
       this.ifr.execCommand('underline', false, null);
       }, false);

     document.getElementById('orderedListButton').addEventListener('click',() => {
       this.ifr.execCommand('InsertOrderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
     }, false);

     document.getElementById('unorderedListButton').addEventListener('click',() => {
       this.ifr.execCommand('InsertUnorderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
     }, false);

     // document.getElementById('fontColorButton').addEventListener('change',(e, ifr = this.ifr) => {
     //   this.ifr.execCommand('ForeColor', false, e.target.value);
     //   this.setState({instructionBody: ifr.getElementsByTagName('body')[0].innerHTML});
     // }, false);
     //
     // document.getElementById('highlightButton').addEventListener('change',(e, ifr = this.ifr) => {
     //   this.ifr.execCommand('BackColor', false, e.target.value);
     //   this.setState({instructionBody: ifr.getElementsByTagName('body')[0].innerHTML});
     // }, false);

     if(this.state.instructionBody){
       this.ifr.getElementsByTagName('body')[0].innerHTML = this.state.instructionBody;
     }
     this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML});

     this.ifr.getElementsByTagName('body')[0].onblur = () => {
       debugger
       this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML});
     };
  }


   componentWillUnmount() {
     document.getElementById('boldButton').removeEventListener('click',() => {
       this.ifr.execCommand('Bold', false, null);
       }, false);

     document.getElementById('italicButton').removeEventListener('click',() => {
       this.ifr.execCommand('italic', false, null);
       }, false);

     document.getElementById('underlineButton').removeEventListener('click',() => {
       this.ifr.execCommand('underline', false, null);
       }, false);

     document.getElementById('orderedListButton').removeEventListener('click',() => {
       this.ifr.execCommand('InsertOrderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
     }, false);

     document.getElementById('unorderedListButton').removeEventListener('click',() => {
       this.ifr.execCommand('InsertUnorderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
     }, false);

     // document.getElementById('fontColorButton').removeEventListener('change',(e, ifr = this.ifr) => {
     //   this.ifr.execCommand('ForeColor', false, e.target.value);
     //   this.setState({instructionBody: ifr.getElementsByTagName('body')[0].innerHTML});
     // }, false);
     //
     // document.getElementById('highlightButton').removeEventListener('change',(e, ifr = this.ifr) => {
     //   this.ifr.execCommand('BackColor', false, e.target.value);
     //   this.setState({instructionBody: ifr.getElementsByTagName('body')[0].innerHTML});
     // }, false);

   }


  render(){
    debugger
    return (
      <div id='textEditor'>
        <div id='theRibbon'>
          <button id='boldButton' title='bold'><b>B</b></button>
          <button id='italicButton' title='italic'><em>I</em></button>
          <button id='underlineButton' title='underline'><u>U</u></button>
          <button id='orderedListButton' title='Numbered list'>(i)</button>
          <button id='unorderedListButton' title='Bulleted list'>&bull;</button>
        </div>
        <div id='richTextArea'>
          <iframe id='theWYSIWYG' name='theWYSIWYG' frameBorder='0' ref={(f) => this.ifr = f}></iframe>
        </div>
      </div>
    );
  }
}


export default WYSIWYG;
