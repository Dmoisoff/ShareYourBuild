import React from 'react';
import { withRouter } from 'react-router-dom';


class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.updateTitle = this.updateTitle.bind(this);
  }

  uploadFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, previewUrl: fileReader.result});
    };
    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append('project[title]', this.state.title);
    formData.append('project[keywords]', this.state.keyWords);
    formData.append('project[picture]', this.state.photoFile);
    debugger
    this.props.submitProject(formData);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }



  render(){
    const preview = this.state.previewUrl ?
    <div>
      <p>Thumbnail Preview</p>
      <img className='index-image-resize' src={this.state.previewUrl} />
    </div>
     : null;

    return(
      <div>
        <form>
          <button onClick={this.handleSubmit.bind(this)} className='submit' type='submit'>Publish</button>
          <input type='text' onChange={this.updateTitle} placeholder='Title' value={`${this.state.title}`} />
          <div>
            <input type='file' onChange={this.uploadFile.bind(this)} />
            {preview}
          </div>
        </form>

      </div>
    );
  }
}

export default withRouter(ProjectForm);
