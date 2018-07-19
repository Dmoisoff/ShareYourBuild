import React from 'react';
import { withRouter } from 'react-router-dom';



class InstructionStep extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const media = this.props.media ? <img className="project-show-image-scale" src={`${this.props.media}`} /> : null;
    return(
      <div className='instruction-step-format'>
        <div>
          <p className='instruction-step-title'>{this.props.step}</p>
        </div>
        {media}
        <div>
          <p className='project-font-format' >{this.props.body}</p>
        </div>
      </div>
    );
  }


}

export default InstructionStep;
