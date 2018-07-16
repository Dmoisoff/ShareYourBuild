import React from 'react';

class IndexProjectItem extends React.Component{

  render(){
    return(
      <div className="index-display-container">
        <img className='index-image-resize' src={`${this.props.thumbnail}`} />
        <div className='index-description'>
          <div>
            {this.props.title}
          </div>
          <div>
            by {this.props.author}
          </div>
        </div>
      </div>
    );
  }

}

export default IndexProjectItem;
