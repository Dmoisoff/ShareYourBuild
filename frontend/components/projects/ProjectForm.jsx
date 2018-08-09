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
    this.extensionCheck = this.extensionCheck.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  updateDescription(e){
    this.setState({description: e.target.value});
  }

  extensionCheck(file){
    const fileName = file.name;
    const extension = fileName.slice((fileName.lastIndexOf('.'))+1);
    const validExtensions = ['jpeg','jpeg2000','tiff','png','svg'];
    for (let i = 0; i < validExtensions.length; i++) {
      if(extension.toLowerCase() === validExtensions[i]){
        return true;
      }
    }
    return false;
  }


  uploadFile(e){
    const file = e.currentTarget.files[0];
    if(!this.extensionCheck(file)){
      this.setState({instructionIssues: [`That is an improper file format, please choose a different file`]});
      this.instructionErrors();
      return;
    }

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({pictureFile: file, pictureUrl: fileReader.result });
    };
    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  removeInstruction(instructionStep){
    const instructions = this.state.instructions;
    const removedInstruction = instructions[instructionStep-1].props.id;
    const newOrderInstructions = instructions.slice(0, instructionStep-1).concat(instructions.slice(instructionStep));
    const modifiedStepNumberInstructions = newOrderInstructions.map((instruction,i) => {
      return instruction = React.cloneElement(instruction, {step: (i + 1)} );
    });
    let newInstructionBodyStatus = [];
    this.state.instructionBodies.forEach((instructionBody) => {
      if(Number(Object.keys(instructionBody)[0]) !== instructionStep){
        newInstructionBodyStatus.push(instructionBody);
      }
    });
    let reorderedNewInstructionBodyStatus = [];
    newInstructionBodyStatus.forEach((InstructionBody) => {
      let updatedStatus = {};
      let currentStepNumber = Number(Object.keys(InstructionBody)[0]);
      if(currentStepNumber < instructionStep){
        updatedStatus[currentStepNumber] = Object.values(InstructionBody)[0];
        reorderedNewInstructionBodyStatus.push(updatedStatus);
      }else{
        updatedStatus[currentStepNumber - 1] = Object.values(InstructionBody)[0];
        reorderedNewInstructionBodyStatus.push(updatedStatus);
      }
    });
    if(this.state.newlyAddedSteps.includes(instructionStep)){
      this.setState({
        newlyAddedSteps: this.state.newlyAddedSteps.filter((num) =>{
          if(num !== instructionStep){
            return num;
          }
        }),
        instructionBodies: reorderedNewInstructionBodyStatus,
        removedInstructions: [...this.state.removedInstructions,removedInstruction],
        instructions: modifiedStepNumberInstructions,
        stepNum: (this.state.stepNum-1)
      });
    }else if(removedInstruction){
      this.setState({
        instructionBodies: reorderedNewInstructionBodyStatus,
        removedInstructions: [...this.state.removedInstructions,removedInstruction],
        instructions: modifiedStepNumberInstructions,
        stepNum: (this.state.stepNum-1)
      });
    }else{
      this.setState({
        instructionBodies: reorderedNewInstructionBodyStatus,
        instructions: modifiedStepNumberInstructions,
        stepNum: (this.state.stepNum-1)
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let completeStatus = true;
    for (let i = 0; i < this.state.instructionBodies.length; i++) {
      const status = Object.values(this.state.instructionBodies[i])[0];
      if(!status){
        completeStatus = false;
      }
    }
    if(!completeStatus){
      this.instructions();
      return;
    }else{
      const projectId = this.props.match.params.projectId;
      const formData = new FormData();
      formData.append('project[title]', this.state.title);
      formData.append('project[keywords]', this.state.keyWords);
      formData.append('project[description]', this.state.description);
      if(this.state.pictureFile){
        formData.append('project[picture]', this.state.pictureFile);
      }
      if(this.props.formType === 'New Project'){
        this.props.submitProject(formData, projectId).then((payload) => {
          const projectId = payload.project.project.id;
          this.setState({projectId: projectId});
          this.redirect(payload.project.project.id);
        });
      }else if (this.props.formType === 'Update Project') {
        this.props.submitProject(formData, projectId).then((payload) => {
          if(this.state.removedInstructions.length){
            this.props.deleteInstruction(this.state.removedInstructions.toString(), projectId).then(() =>{
              let newInstructions = this.state.instructions.slice(-(this.state.newlyAddedSteps.length));
              newInstructions = newInstructions.map((instruction) => {
                instruction = React.cloneElement(instruction, {projectId: this.state.projectId});
                return instruction;
              });
              let updatedInstructions = this.state.instructions.slice(0,-(this.state.newlyAddedSteps.length));
              updatedInstructions = updatedInstructions.map((instruction) => {
                instruction = React.cloneElement(instruction, {uploadStatus: true});
                return instruction;
              });
              updatedInstructions = updatedInstructions.concat(newInstructions);
              this.setState({instructions: updatedInstructions});
              this.redirect(payload.project.project.id);
            });
          }else{
            let newInstructions = this.state.instructions.slice(-(this.state.newlyAddedSteps.length));
            newInstructions = newInstructions.map((instruction) => {
              instruction = React.cloneElement(instruction, {projectId: this.state.projectId});
              return instruction;
            });
            let updatedInstructions = this.state.instructions.slice(0,-(this.state.newlyAddedSteps.length));
            updatedInstructions = updatedInstructions.map((instruction) => {
              instruction = React.cloneElement(instruction, {uploadStatus: true});
              return instruction;
            });
            updatedInstructions = updatedInstructions.concat(newInstructions);
            this.setState({instructions: updatedInstructions, projectId: projectId});
            this.redirect(payload.project.project.id);
          }
        });
      }
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

  instructionBodiesState(instructionBodyFilled,instructionStep){
    let newInstructions = {};
    newInstructions[instructionStep] = instructionBodyFilled;
    if (!this.state.instructionBodies.length) {
      this.setState({instructionBodies: [newInstructions]});
    }else {
      let present = false;
      const updatedInstructions = this.state.instructionBodies.map((instruction) =>{
        if(Object.keys(instruction)[0] === Object.keys(newInstructions)[0]){
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
  }

  errors(){
    if(this.props.errors.length === 0){
      return [];
    }else{
      setTimeout(() => {this.props.clearProjectErrors();} ,3000);
      return this.props.errors.map((error,i) => {
        return <li className='project-errors' key={i} >{error}</li>;
        });
      }
    }

    instructionPhotoUploadCheck(boolean){
      if(!boolean){
        this.setState({instructionIssues: [`That is an improper file format, please choose a different file`]});
        this.instructionErrors();
      }
    }

  instructionErrors(){
    if(!this.state.instructionIssues.length){
      return [];
    }else{
      setTimeout(() => {this.setState({instructionIssues: []});} ,3000);
      return this.state.instructionIssues.map((error,i) => {
        return <li className='project-errors' key={i} >{error}</li>;
        });
      }
    }

    instructions(){
      let incompleteInstructions = [];
      const instructionBodyErrors = [];
      this.state.instructionBodies.forEach((instructionBody) => {
        if(!Object.values(instructionBody)[0]){
          incompleteInstructions.push(Object.keys(instructionBody)[0]);
        }
      });
      if(incompleteInstructions.length){
        incompleteInstructions = incompleteInstructions.sort((a,b) => a-b);
        incompleteInstructions.forEach((instructionNumber) =>{
          instructionBodyErrors.push([`Please finish filling out the body for step ${instructionNumber}`]);
        });
      }
      if(instructionBodyErrors.length){
        this.setState({instructionIssues: instructionBodyErrors});
      }else{
        const stepNumber = this.state.stepNum;
        let keyValue = (this.state.key + 1);
        let newlyAddedInstruction = {};
        newlyAddedInstruction[stepNumber] = false;
        this.setState({
          instructionBodies: [...this.state.instructionBodies,newlyAddedInstruction],
          instructionIssues: instructionBodyErrors,
          stepNum: (stepNumber + 1),
          newlyAddedSteps: [...this.state.newlyAddedSteps,stepNumber],
          instructions: [
            ...this.state.instructions,
            <NewInstructionContainer
              key={keyValue}
              step={this.state.stepNum}
              instructionBodiesState={this.instructionBodiesState.bind(this)}
              removeInstruction={this.removeInstruction.bind(this)}
              instructionPhotoUploadCheck={this.instructionPhotoUploadCheck.bind(this)}
              />
          ],
          key: keyValue
        });
      }
      this.state.instructions;
    }

    componentWillMount(){
      if(this.props.project.lastPrefilledInstruction === this.state.stepNum &&
        this.props.formType === 'Update Project'){
          let keyValue = this.state.key;
        let instructions = this.state.instructions.map((instruction,i) => {
          if(!instruction){
            return [];
          }
          keyValue += 1;
          return <EditInstructionContainer
                  step={instruction.instructionStep}
                  id={instruction.id}
                  body={instruction.body}
                  title={instruction.title}
                  projectId={instruction.projectId}
                  key={keyValue}
                  media={instruction.media}
                  instructionBodiesState={this.instructionBodiesState.bind(this)}
                  removeInstruction={this.removeInstruction.bind(this)}
                  instructionPhotoUploadCheck={this.instructionPhotoUploadCheck.bind(this)}
                  />;
        });
       this.setState({instructions: instructions, key: keyValue});
      }
    }

    componentDidUpdate(prevProps){
      if(this.props.errors.length !== 0 && prevProps.errors.length === 0){
        const instructionBodyErrors = [];
        this.state.instructionBodies.forEach((instructionBody) => {
          if(!Object.values(instructionBody)[0]){
            instructionBodyErrors.push([`Please finish filling out the body for step ${Object.keys(instructionBody)}`]);
          }
        });
        if(instructionBodyErrors.length){
          this.setState({instructionIssues: instructionBodyErrors});
        }
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
                   <textarea id='textarea' onChange={this.updateDescription.bind(this)}
                     placeholder='Please enter a brief description of your build'
                     className='project-body-text' rows="8" cols="80"
                     value={`${this.state.description}`}></textarea>
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
                 <textarea id='textarea' onChange={this.updateDescription.bind(this)}
                   placeholder='Please enter a brief description of your build'
                   className='project-body-text' rows="8" cols="80"
                   value={`${this.state.description}`}></textarea>

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
                                  this.instructionErrors()
                                  : null;


    return(
      <div className='page-background'>
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
              <div className='project-error-message-position'>
                <ul className='project-errors-container'>
                  {this.errors()}
                  {instructionErrors}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
