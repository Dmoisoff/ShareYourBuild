import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import IndexProjectItem from './IndexProjectItem';

class IndexProjects extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      key: Math.random()
    };
  }

  componentDidMount(){
    if(this.props.formType === 'User Index Projects'){
      this.props.fetchProjectsByUser(this.props.displayedUser);
    }else{
      this.props.fetchProjects();
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.displayedUser !== nextProps.displayedUser && this.props.formType === 'User Index Projects'){
      this.props.fetchProjectsByUser(nextProps.displayedUser).then(() => {
        this.setState({key: Math.random()});
      });
    }
  }

  renderProjects(){
    let display = [];
    this.props.projects.map((project) => {
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
      }else if(this.props.formType === 'Index Projects'){
        display.push(component);
      }
    });
    if(!display.length){
      display = <h3>You have no builds, share an idea and create a build!</h3>;
    }
    return(
      display
    );
  }



  render(){
    if (!this.props.projects) {
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
