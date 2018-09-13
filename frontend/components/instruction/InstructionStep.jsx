import React from 'react';
import { withRouter } from 'react-router-dom';



class InstructionStep extends React.Component{
  constructor(props){
    super(props);
    this.displayMedia = this.displayMedia.bind(this);
  }

  displayMedia(){
    // debugger
    const imagesUrls = this.props.images;
    let position;
    let alignment;
    let images1 = [];
    let images2 = [];
    const format = 'instruction-show-image-scale';
    if(this.props.images.length === 1){
      position = 'multiple-images-position-instruction-1';
      alignment = 'multiple-images-aligment-instruction';
    }else{
      position = 'multiple-images-position-instruction-2';
    }
    const images = this.props.images.map((image, index) => {
      if(this.props.images.length !== 1){
        alignment = 'multiple-images-aligment-instruction-' + index;
      }
      return <div key={index} className={alignment}>
        <img className={format} src={imagesUrls[index]} />
      </div>;
    });
    if(images.length > 2){
      images1 = images.slice(0,2);
      images2 = images.slice(2);
    }else{
      images1 = images;
    }
    return (
      <div className='project-show-image-placement'>
        <div className={position}>
          {images1}
        </div>
        <div className={position}>
          {images2}
        </div>
      </div>
    );
  }

  render(){
    // debugger
    const body = this.props.body;
    const media = this.props.images ? this.displayMedia() : null;
    return(
      <div className='instruction-step-format'>
        <div>
          <p className='instruction-step-title'> Step {this.props.step}: {this.props.title}</p>
        </div>
        {media}
        <div>
          <p className='project-font-format' dangerouslySetInnerHTML={{ __html: body }}></p>
        </div>
        <div className='instruction-divider'></div>
      </div>
    );
  }


}

export default InstructionStep;
