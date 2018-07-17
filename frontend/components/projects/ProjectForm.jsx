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
    if(this.state.pictureFile){
      formData.append('project[picture]', this.state.pictureFile);
    }
    this.props.submitProject(formData);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }


  errors(){
    if(!this.props.errors){
      return [];
    }else{
      return this.props.errors.map((error,i) => {
        return <li key={i} >{error}</li>;
        });
      }
    }


  render(){
    const preview = this.state.pictureUrl ?
    <div>
      <p>Picture Preview</p>
      <img className='index-image-resize' src={this.state.pictureUrl} />
    </div>
     : null;

    return(
      <div>
        <form>
          <input type='text' onChange={this.updateTitle} placeholder='Title' value={`${this.state.title}`} />
          <div>
            <input type='file' onChange={this.uploadFile.bind(this)} />
            {preview}
          </div>
          <button onClick={this.handleSubmit.bind(this)} className='project-submit' type='submit'>Publish</button>
        </form>
        <ul>
          {this.errors.bind(this)}
        </ul>

      </div>
    );
  }
}

export default withRouter(ProjectForm);
