import React from 'react';
import { withRouter } from 'react-router-dom';


class WYSIWYG extends React.Component{
  constructor(props){
    super(props);
    this.ifr;
    this.state = {
      refNumber: this.props.step,
      instructionBody: this.props.instructionBody
    };
    this.updatelisteners = this.updatelisteners.bind(this);
    this.rerender = false;
    this.nextRefNum;
  }

    shouldComponentUpdate(nextProps, nextState) {
      if(nextProps.step !== this.props.step){
        this.setState({refNumber: nextProps.step});
        this.nextRefNum = nextProps.step;
        this.rerender = true;
        return true;
      }
      if(this.rerender){
        return true;
      }
   return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.nextRefNum === this.state.refNumber && this.rerender){
      this.updatelisteners(this.props.step);
      this.rerender = false;
      this.render();
    }else if(this.rerender){
      this.render();
    }
  }

   componentDidMount(){
     this.ifr = document.getElementById(`theWYSIWYG-${this.state.refNumber}`).contentDocument;
     this.ifr.designMode = 'on';

     this.ifr.getElementsByTagName('body')[0].id = 'theWYSIWYG';

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



   updatelisteners(newStep){
     this.ifr = document.getElementById(`theWYSIWYG-${newStep}`).contentDocument;
     this.ifr.designMode = 'on';

     this.ifr.getElementsByTagName('body')[0].id = 'theWYSIWYG';

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



  render(){
    return (
      <div id='textEditor'>
        <div id='theRibbon'>
          <button id={`boldButton-${this.state.refNumber}`} onClick={ () => {
              this.ifr.execCommand('Bold', false, null);
              this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
                this.props.updateDescription(this.state.instructionBody))
              );
            }} title='bold'><b>B</b></button>

          <button id={`italicButton-${this.state.refNumber}`} onClick={ () => {
            this.ifr.execCommand('italic', false, null);
            this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
              this.props.updateDescription(this.state.instructionBody))
            );
            }} title='italic'><em>I</em></button>

          <button id={`underlineButton-${this.state.refNumber}`} onClick={ () => {
            this.ifr.execCommand('underline', false, null);
            this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
              this.props.updateDescription(this.state.instructionBody))
            );
            } } title='underline'><u>U</u></button>

          <button id={`orderedListButton-${this.state.refNumber}`} onClick={ () => {
            this.ifr.execCommand('InsertOrderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
            this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
              this.props.updateDescription(this.state.instructionBody))
            );
          } } title='Numbered list'>(i)</button>

        <button id={`unorderedListButton-${this.state.refNumber}`} onClick={ () => {
          this.ifr.execCommand('InsertUnorderedList', false, 'newOL ' + Math.round(Math.random() * 1000));
          this.setState({instructionBody: this.ifr.getElementsByTagName('body')[0].innerHTML}, () => (
            this.props.updateDescription(this.state.instructionBody))
          );
        } } title='Bulleted list'>&bull;</button>

        </div>
        <div id='richTextArea'>
          <iframe id={`theWYSIWYG-${this.state.refNumber}`} className='theWYSIWYG' name='theWYSIWYG' frameBorder='0' ref={(f) => this.ifr = f}></iframe>
        </div>
      </div>
    );
  }
}


export default WYSIWYG;
