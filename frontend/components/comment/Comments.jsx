import React from 'react';
import { withRouter } from 'react-router-dom';

class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.comment;
  }
}
export default Comments;
