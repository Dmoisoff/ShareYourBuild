import React from 'react';
import { withRouter } from 'react-router-dom';


class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.updateTitle = this.updateTitle.bind(this);
    this.errors = this.errors.bind(this);
    this.uploadResult = this.uploadResult.bind(this);
  }

  uploadFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({pictureFile: file, pictureUrl: fileReader.result });
    };
    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('project[title]', this.state.title);
    formData.append('project[keywords]', this.state.keyWords);
    formData.append('project[picture_url]', this.state.pictureUrl);
    formData.append('project[description]', this.state.description);
    if(this.state.pictureFile){
      formData.append('project[picture]', this.state.pictureFile);
    }
    this.props.submitProject(formData).then(this.setState({uploadStatus: true}));
  }

  uploadResult(){
    if(this.state.uploadStatus === true){
      if(this.state.formType === 'New Project'){
        return <p>Build Successfully Saved</p>;
      }else{
        return <p>Build Successfully Updated</p>;
      }
    }else{
      return [];
    }
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }
  updateDescription(e){
    this.setState({description: e.target.value});
  }


  errors(){
    if(!this.props.errors){
      return [];
    }else{
      return this.props.errors.map((error,i) => {
        return <li className='project-errors' key={i} >{error}</li>;
        });
      }
    }


  render(){
    const preview = this.state.pictureUrl ?
    <div className='project-picture-preview-format'>
      <p>Picture Preview</p>
      <img className='project-image-resize' src={this.state.pictureUrl} />
    </div>
     : null;

    return(
      <div className='project-background'>
        <div className='project-form-positioning'>
          <form className='project-form-styling'>
            <div className='project-input-format'>
              <input className='project-title-styling' type='text' onChange={this.updateTitle} placeholder='Title' value={`${this.state.title}`} />
              <div className='project-image-input-format'>
                <p className='project-image-text' >Please select a main picture for your build</p>
                <input className='project-body-input' type='file' onChange={this.uploadFile.bind(this)} />
              </div>
              {preview}
              <textarea onChange={this.updateDescription.bind(this)} placeholder='Please enter a brief description of your build' className='project-body-text' rows="8" cols="80">{this.state.description}</textarea>
            </div>
          <div className='project-button-placement'>
            <button onClick={this.handleSubmit.bind(this)} className='project-submit' type='submit'>Publish</button>
          </div>
          </form>
          <div className='project-error-position'>
            {this.uploadResult()}
            <ul className='project-errors-container'>
              {this.errors()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
