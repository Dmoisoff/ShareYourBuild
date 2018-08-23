import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import IndexProjectItem from './IndexProjectItem';

class IndexProjects extends React.Component{
  constructor(props){
    debugger
    super(props);
    this.state = {
      projects: this.props.projects
    };
      if(this.props.formType === 'User Index Projects'){
        this.props.fetchProjectsByUser(this.props.displayedUser).then((payload) => this.setState({
          projects:Object.values(payload)})
        );
      }else if (this.props.formType === 'Search Projects') {
        debugger
        if(this.props.search === ''){
            this.props.history.push('/');
          }
        this.props.searchProjects(this.props.search).then((payload) =>{
        this.setState({
          projects:Object.values(payload)});}
        );
      }else{
        this.props.fetchProjects().then((payload) => this.setState({
          projects:Object.values(payload)})
        );
      }
    }

    componentDidUpdate(prevProps){
      debugger
      if((this.props.search === '' || this.props.search === undefined) && this.props.formType === 'Search Projects'){
          this.props.history.push('/');
        }
      if ((prevProps.search != this.props.search) && this.props.formType === 'Search Projects') {
        this.props.searchProjects(this.props.search).then((payload) =>{
        this.setState({
          projects:Object.values(payload)});}
        );
      // }else if (this.props.formType === 'User Index Projects') {
      //   this.props.fetchProjectsByUser(this.props.displayedUser).then((payload) => this.setState({
      //     projects:Object.values(payload)})
      //   );
      // }else if(this.props.formType === 'Index Projects'){
      //   this.props.fetchProjects().then((payload) => this.setState({
      //     projects:Object.values(payload)})
      //   );
      }
    }



  // componentDidMount(){
  //   if(this.props.formType === 'User Index Projects'){
  //     this.props.fetchProjectsByUser(this.props.displayedUser);
  //   }else{
  //     this.props.fetchProjects().then((payload) => {this.setState({
  //       projects: Object.values(payload)
  //     });
  //   });
  //   }
  // }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.displayedUser !== nextProps.displayedUser && this.props.formType === 'User Index Projects'){
  //     this.props.fetchProjectsByUser(nextProps.displayedUser).then(() => {
  //       this.setState({key: Math.random()});
  //     });
  //   }
  // }

  renderProjects(){
    debugger
    let display = [];
    let projects = this.state.projects;
    if(this.state.projects.length && this.props.formType === 'User Index Projects'){
      projects = this.state.projects.filter((project) => (project.authorUsername === this.props.username) && (project.author_id == this.props.displayedUser) );
    }
    projects.map((project) => {
      const component = <Link key={project.id} to={`/project/${project.id}`}>
        <IndexProjectItem
          key={project.id}
          title={project.title}
          mainPicture={project.picture}
          author={project.authorUsername}
          featured={project.featured}
          viewCount={project.view_count} />
      </Link>;
      if(project.author_id == this.props.displayedUser && this.props.formType === 'User Index Projects'){
        display.push(component);
      }else if(this.props.formType === 'Index Projects' || this.props.formType === 'Search Projects'){
        display.push(component);
      }
    });
    if(!display.length && this.props.formType === 'User Index Projects'){
      if(this.props.currentUserPage){
        display = <h3>You have no builds, share an idea and create a build!</h3>;
      }else{
        display = <h3>This user doesn't have any projects</h3>;
      }
    }
    if(!display.length && this.props.formType === 'Search Projects'){
      debugger
      display = <h3>There are no results matching this.props.search, please try another search term</h3>;
    }
    return(
      display
    );
  }



  render(){
    if (!this.state.projects.length) {
      return <div>Loading...</div>;
    }else{
      const header = this.props.formType === 'User Index Projects' ?
      <p className='index-title'>{this.props.username} builds</p> : <p className='index-title'>Builds</p>;
      return(
        <div className='index-background'>
          {header}
          <ul className="index-display-items">
            {this.renderProjects()}
          </ul>
        </div>
      );
    }
  }


}

export default IndexProjects;
