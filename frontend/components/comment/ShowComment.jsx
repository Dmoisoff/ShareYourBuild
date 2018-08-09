import React from 'react';
import { withRouter } from 'react-router-dom';



class ShowComment extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='instruction-step-format'>
        <div>
          <div>
            <p>{this.props.username}</p>
            <p className='project-font-format'>{this.props.body}</p>
          </div>
        </div>
        <div className='instruction-divider'></div>
      </div>
    );
  }


}

export default ShowComment;
