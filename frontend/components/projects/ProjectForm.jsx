import React from 'react';
import { withRouter } from 'react-router-dom';
import NewInstructionContainer from './../instruction/NewInstructionContainer';
import EditInstructionContainer from './../instruction/EditInstructionContainer';
import merge from 'lodash/merge';


class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.updateTitle = this.updateTitle.bind(this);
    this.errors = this.errors.bind(this);
    this.instructionErrors = this.instructionErrors.bind(this);
    this.uploadResult = this.uploadResult.bind(this);
    this.redirect = this.redirect.bind(this);
    this.instructions = this.instructions.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  updateDescription(e){
    this.setState({description: e.target.value});
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
    debugger
    e.preventDefault();
    debugger
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
        debugger
        const projectId = payload.project.project.id;
        this.setState({projectId: projectId});
        this.redirect(payload.project.project.id);
        // setTimeout(() =>{this.redirect(payload.project.project.id);},1000);
      });
    }else if (this.props.formType === 'Update Project') {
      debugger
      let newInstructions = this.state.instructions.slice(-(this.state.newlyAddedSteps));
        newInstructions = newInstructions.map((instruction) => {
          instruction = React.cloneElement(instruction, {projectId: this.state.projectId});
          return instruction;
        });
      let updatedInstructions = this.state.instructions.slice(0,-(this.state.newlyAddedSteps)).concat(newInstructions);
      this.props.submitProject(formData, projectId).then((payload) => {
        this.setState({instructions: updatedInstructions});
        this.redirect(payload.project.project.id);
        // setTimeout(() =>{this.redirect(payload.project.project.id);},1000);
      });
    }

    }

  redirect(id){
    debugger
    this.setState({uploadStatus: true});
    setTimeout(() => {this.props.history.push(`/project/${id}`);}, 1500);
  }

  uploadResult(){
    debugger
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

  instructionBodiesState(instructionBodyFilled,instructionStep){
    debugger
    let newInstructions = {};
    newInstructions[instructionStep] = instructionBodyFilled;
    if (!this.state.instructionBodies.length) {
      this.setState({instructionBodies: [newInstructions]});
    }else {
      let present = false;
      const updatedInstructions = this.state.instructionBodies.map((instruction) =>{
        debugger
        if(Object.keys(instruction)[0] === Object.keys(newInstructions)[0]){
          debugger
          present = true;
          return newInstructions;
        }else{
          return instruction;
        }
      });
      if (!present) {
        updatedInstructions.push(newInstructions);
      }
    this.setState({instructionBodies: updatedInstructions});
    }
    debugger
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

  instructionErrors(){
    if(!this.state.instructionIssues.length){
      return [];
    }else{
      return this.state.instructionIssues.map((error,i) => {
        return <li className='project-errors' key={i} >{error}</li>;
        });
      }
    }

    instructions(){
      debugger
      const instructionBodyErrors = [];
      this.state.instructionBodies.forEach((instructionBody) => {
        if(!Object.values(instructionBody)[0]){
          instructionBodyErrors.push([`Please finish filling out the body for s ${Object.keys(instructionBody)}`]);
        }
      });
      if(instructionBodyErrors.length){
        this.setState({instructionIssues: instructionBodyErrors});
      }else{
        const stepNumber = this.state.stepNum;
        let newlyAddedInstruction = {};
        newlyAddedInstruction[stepNumber] = false;
        this.setState({
          instructionBodies: [...this.state.instructionBodies,newlyAddedInstruction],
          instructionIssues: instructionBodyErrors,
          stepNum: (stepNumber + 1),
          newlyAddedSteps: (this.state.newlyAddedSteps +1),
          instructions: [
            ...this.state.instructions,
            <NewInstructionContainer
              key={this.state.stepNum}
              stepNum={this.state.stepNum}
              instructionBodiesState={this.instructionBodiesState.bind(this)} />
          ]
        });
      }
      this.state.instructions;
      debugger
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
                  instructionBodiesState={this.instructionBodiesState.bind(this)}
                  />;
        });
       this.setState({instructions: instructions});
      }
    }

  render(){
    const previousPicture = this.state.picture &&
          this.props.formType === 'Update Project' ?
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
                   <input className='project-title-styling'
                     type='text'
                     onChange={this.updateTitle}
                     placeholder='Title'
                     value={`${this.state.title}`} />
                   <div className='project-images-display-update-format'>
                     {previousPicture}
                     <div className='project-image-input-format'>
                      <p className='project-image-text' >Please select a main picture for your build</p>
                      <input className='project-body-input'
                        type='file'
                        onChange={this.uploadFile.bind(this)} />
                       {preview}
                     </div>
                   </div>
                   <p className='project-edit-body-text'>Edit Main Description Below</p>
                   <textarea onChange={this.updateDescription.bind(this)}
                     placeholder='Please enter a brief description of your build'
                     className='project-body-text' rows="8" cols="80"
                     value={`${this.state.description}`}></textarea>
                     <div className='project-message-position'>
                       <ul className='project-errors-container'>
                         {this.errors()}
                       </ul>
                     </div>
                 </div>;
     }else{
       // this is the view for creating a new project
       create = <div className='project-input-format'>
                 <p className='project-edit-title-text'>Please select a title for your project</p>
                 {titleEdit}
                 <input className='project-title-styling'
                   type='text' onChange={this.updateTitle}
                   placeholder='Title'
                   value={`${this.state.title}`} />
                 <div className='project-images-display-create-format'>
                   <div className='project-image-input-format'>
                     <p className='project-image-text' >Please select a main picture for your build</p>
                     <input className='project-body-input'
                       type='file'
                       onChange={this.uploadFile.bind(this)} />
                     {preview}
                   </div>
                 </div>
                 {bodyEdit}
                 <textarea onChange={this.updateDescription.bind(this)}
                   placeholder='Please enter a brief description of your build'
                   className='project-body-text' rows="8" cols="80"
                   value={`${this.state.description}`}></textarea>
                   <div className='project-message-position'>
                     <ul className='project-errors-container'>
                       {this.errors()}
                     </ul>
                   </div>
               </div>;
     }
     // this will pass the project
    let instructions = this.state.instructions;
      if (this.state.projectId && this.props.formType === 'New Project') {
        instructions = instructions.map((instruction) => {
          instruction = React.cloneElement(instruction, {projectId: this.state.projectId});
          return instruction;
        });
    }

    const instructionErrors = this.state.instructionIssues.length ?
                              <div className='project-instruction-error-message'>
                                <ul className='project-errors-container'>
                                  {this.instructionErrors()}
                                </ul>
                              </div> : null;


    return(
      <div className='project-background'>
        <div className='project-form-positioning'>
          <form className='project-form-styling' id='submit-project'>
              {create}
              {update}
          </form>
          <div className='project-message-position '>

            <ul>
              {instructions}
            </ul>
          </div>
          <div>
            <div className='project-button-placement'>
              <button form='submit-project'
                onClick={this.handleSubmit.bind(this)}
                className='project-submit'
                type='submit'>{submitButton}</button>
              {this.uploadResult()}
              <button className='add-instruction'
                onClick={() =>{this.instructions();}}>Add Instruction</button>
            </div>
            {instructionErrors}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
