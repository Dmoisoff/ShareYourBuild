import React from 'react';

class IndexProjectItem extends React.Component{

  render(){
    return(
      <li className="index-display-container">
        <img className='index-image-resize' src={`${this.props.thumbnail}`} />
        <div className='index-description'>
          <div>
            {this.props.title}
          </div>
          <div>
            by {this.props.author}
          </div>
        </div>
      </li>
    );
  }

}

export default IndexProjectItem;
