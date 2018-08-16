import React from 'react';
import { withRouter } from 'react-router-dom';
import WysiwygContainer from './../rich_text_editor/WysiwygContainer';


class Instructions extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.instruction;
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  updateDescription(input){
    debugger
    const regex = /<[a-z]*>|<\/[a-z]*>/g;
    const filteredInput = input.replace(regex,"");
    if (filteredInput === "") {
      debugger
      this.props.instructionBodiesState(false,this.state.step);
    }else{
      this.props.instructionBodiesState(true,this.state.step);
    }
    this.setState({body: input});
  }

  componentDidUpdate(prevProps){
    if (this.props.formType === 'Update Instruction' && !this.state.rendered) {
      debugger
      if(this.props.uploadStatus){
        this.handleSubmit();
      }
    }else if(this.props.projectId !== prevProps.projectId){
      debugger
     this.handleSubmit();
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.step !== nextProps.step){
      this.setState({step: nextProps.step});
    }
  }


  uploadFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({media: file, mediaUrl: fileReader.result });
    };
    if(file){
      fileReader.readAsDataURL(file);
    }
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

    handleSubmit(){
      const projectId = this.props.projectId;
      const formData = new FormData();
      formData.append('instruction[title]', this.state.title);
      formData.append('instruction[project_id]', this.props.projectId);
      formData.append('instruction[instruction_step]', this.state.step);
      formData.append('instruction[body]', this.state.body);
      if(this.state.media){
        formData.append('instruction[media]', this.state.media);
      }
      if(!this.state.rendered && this.props.formType === 'Update Instruction'){
        this.setState({rendered: true});
        this.props.submitInstruction(formData, this.state.id);
      }else if(!this.state.rendered){
        this.setState({rendered: true});
        this.props.submitInstruction(formData, projectId);
      }
    }

  render(){
    const preview = this.state.mediaUrl ?
    <div className='project-picture-preview-format'>
      <p>Picture Preview</p>
      <img className='project-image-resize' src={this.state.mediaUrl} />
      <button className='project-submit' onClick={() => {this.setState({mediaUrl: null, media: null});}}>Remove Image</button>
    </div>
     : null;


    return(
        <div className='instruction-form-positioning'>
          <div className='project-form-styling'>
            <form className='project-input-format'>
              <div>
                <p>Step {this.state.step}:</p>
                <input className='project-title-styling' type='text' onChange={this.updateTitle} placeholder='Step title (optional)' value={`${this.state.title}`} />
              </div>
              <div className='project-images-display-create-format'>
                <div className='project-image-input-format'>
                  <div>
                    <p className='project-image-text' >Please select a picture for your step</p>
                    <input className='project-body-input' type='file' accept="image/*" onChange={this.uploadFile.bind(this)} />
                  </div>
                  {preview}
                </div>
              </div>
              <p>Description</p>
              <WysiwygContainer body={this.state.body}
                step={this.state.step}  updateDescription={this.updateDescription.bind(this)} />
              <div>
                <button form='submit-project'
                  onClick={() => this.props.removeInstruction(this.state.step)}
                  className='project-submit'
                  type='submit'>Remove Instruction</button>
              </div>
            </form>
          </div>
          <div className='project-message-position'>
          </div>
          <div className='project-message-position'>
            <ul className='project-errors-container'>
              {this.errors()}
            </ul>
          </div>
        </div>
    );
  }


}

export default Instructions;
