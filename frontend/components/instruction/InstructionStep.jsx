import React from 'react';
import { withRouter } from 'react-router-dom';



class InstructionStep extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const media = this.props.media ? <img className="instruction-show-image-scale" src={`${this.props.media}`} /> : null;
    return(
      <div className='instruction-step-format'>
        <div>
          <p className='instruction-step-title'> Step {this.props.step}: {this.props.title}</p>
        </div>
        {media}
        <div>
          <p className='project-font-format' >{this.props.body}</p>
        </div>
        <div className='instruction-divider'></div>
      </div>
    );
  }


}

export default InstructionStep;
