import React from 'react';
import { withRouter } from 'react-router-dom';
import NewInstructionContainer from './../instruction/NewInstructionContainer';
import EditInstructionContainer from './../instruction/EditInstructionContainer';


class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.updateTitle = this.updateTitle.bind(this);
    this.errors = this.errors.bind(this);
    this.uploadResult = this.uploadResult.bind(this);
    this.redirect = this.redirect.bind(this);
    this.instructions = this.instructions.bind(this);
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
    const projectId = this.props.match.params.projectId;
    const formData = new FormData();
    formData.append('project[title]', this.state.title);
    formData.append('project[keywords]', this.state.keyWords);
    // formData.append('project[picture_url]', this.state.pictureUrl);
    formData.append('project[description]', this.state.description);
    if(this.state.pictureFile){
      formData.append('project[picture]', this.state.pictureFile);
    }
    if(this.props.formType === 'New Project'){
      this.props.submitProject(formData, projectId).then((payload) => {
        const projectId = payload.project.project.id;
        this.setState({projectId: projectId});
        setTimeout(() =>{this.redirect(payload.project.project.id);},1000);
      });
    }else if (this.props.formType === 'Update Project') {
      let newInstructions = this.state.instructions.slice(-(this.state.newlyAddedSteps));
        newInstructions = newInstructions.map((instruction) => {
          instruction = React.cloneElement(instruction, {projectId: this.state.projectId});
          return instruction;
        });
      let updatedInstructions = this.state.instructions.slice(0,-(this.state.newlyAddedSteps)).concat(newInstructions);
      this.props.submitProject(formData, projectId).then((payload) => {
        this.setState({instructions: updatedInstructions});
        setTimeout(() =>{this.redirect(payload.project.project.id);},1000);
      });
    }

    }

  redirect(id){
    this.setState({uploadStatus: true});
    setTimeout(() => {this.props.history.push(`/project/${id}`);}, 1500);
  }

  uploadResult(){
    if(this.state.uploadStatus === true){
      if(this.props.formType === 'New Project'){
        return <div className='project-success-container'><p className='project-success'>Build Successfully Saved</p></div>;
      }else{
        return <div className='project-success-container'><p className='project-success'>Build Successfully Updated</p></div>;
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

    instructions(){
        this.setState({
          stepNum: (this.state.stepNum + 1),
          newlyAddedSteps: (this.state.newlyAddedSteps +1),
          instructions: [...this.state.instructions,
            <NewInstructionContainer key={this.state.stepNum} stepNum={this.state.stepNum} />]
          });
        this.state.instructions;
    }

    componentWillMount(){

            if(this.props.project.lastPrefilledInstruction === this.state.stepNum &&
              this.props.formType === 'Update Project'){
              let instructions = this.state.instructions.map((instruction) => {
                if(!instruction){
                  return [];
                }
                return <EditInstructionContainer
                        step={instruction.instructionStep}
                        body={instruction.body}
                        title={instruction.title}
                        projectId={this.props.pro}
                        key={instruction.instructionStep}
                        media={instruction.media}
                        />;
              });
                   this.setState({instructions: instructions});
    }
  }




  render(){

    const previousPicture = this.state.picture && this.props.formType === 'Update Project' ?
    <div className='project-picture-preview-format'>
      <p>Previous Image</p>
      <img className='project-previous-picture-format' src={this.state.picture} />
    </div> : null;

    const preview = this.state.pictureUrl ?
    <div className='project-picture-preview-format'>
      <p>Picture Preview</p>
      <img className='project-image-resize' src={this.state.pictureUrl} />
    </div>
     : null;

     let titleEdit = null;
     let bodyEdit = null;
     if(this.props.formType === 'Update Project'){
        titleEdit = <p className='project-edit-title-text'>Edit Title Below</p>;
        bodyEdit = <p className='project-edit-body-text'>Edit Main Description Below</p>;
     }

     const submitButton = this.props.formType === 'New Project' ? "Publish" : "Update";

     let update = null;
     let create = null;
     if(this.props.formType === 'Update Project'){
       // this is the view for updating a new project
       update = <div className='project-input-format'>
                   <p className='project-edit-title-text'>Edit Title Below</p>
                   <input className='project-title-styling' type='text' onChange={this.updateTitle} placeholder='Title' value={`${this.state.title}`} />
                   <div className='project-images-display-update-format'>
                     {previousPicture}
                     <div className='project-image-input-format'>
                       <p className='project-image-text' >Please select a main picture for your build</p>
                       <input className='project-body-input' type='file' onChange={this.uploadFile.bind(this)} />
                       {preview}
                     </div>
                   </div>
                   <p className='project-edit-body-text'>Edit Main Description Below</p>
                   <textarea onChange={this.updateDescription.bind(this)} placeholder='Please enter a brief description of your build' className='project-body-text' rows="8" cols="80" value={`${this.state.description}`}></textarea>
                 </div>;
     }else{
       // this is the view for creating a new project
       create = <div className='project-input-format'>
                 {titleEdit}
                 <input className='project-title-styling' type='text' onChange={this.updateTitle} placeholder='Title' value={`${this.state.title}`} />
                 <div className='project-images-display-create-format'>
                   <div className='project-image-input-format'>
                     <p className='project-image-text' >Please select a main picture for your build</p>
                     <input className='project-body-input' type='file' onChange={this.uploadFile.bind(this)} />
                     {preview}
                   </div>
                 </div>
                 {bodyEdit}
                 <textarea onChange={this.updateDescription.bind(this)} placeholder='Please enter a brief description of your build' className='project-body-text' rows="8" cols="80" value={`${this.state.description}`}></textarea>
               </div>;
     }
     let instructions = this.state.instructions;
     // this will pass the project
     if (this.state.projectId && this.props.formType === 'New Project') {
       instructions = instructions.map((instruction) => {
         instruction = React.cloneElement(instruction, {projectId: this.state.projectId});
         return instruction;
       });

     }


    return(
      <div className='project-background'>
        <div className='project-form-positioning'>
          <form className='project-form-styling'>
              {create}
              {update}
          <div className='project-button-placement'>
            <button onClick={this.handleSubmit.bind(this)} className='project-submit' type='submit'>{submitButton}</button>
          </div>
          </form>
          <div>
            <button className='add-instruction' onClick={() =>{this.instructions();}}>Add Instruction</button>
          </div>
          <div className='project-message-position'>
            <ul className='project-errors-container'>
              {this.errors()}
            </ul>
          </div>
          <div className='project-message-position '>
            <ul>
              {instructions}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
