import React from 'react';
import { withRouter } from 'react-router-dom';



class InstructionStep extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    debugger
    const media = this.props.media ? <img className="project-show-image-scale" src={`${this.props.media}`} /> : null;
    return(
      <div className='instruction-step-format'>
        <div>
          {this.props.step}
        </div>
        {media}
        <div>
          {this.props.body}
        </div>
      </div>
    );
  }


}

export default InstructionStep;
