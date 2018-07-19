import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import IndexProjectItem from './IndexProjectItem';

class IndexProjects extends React.Component{

  componentDidMount(){
    if(this.props.formType === 'User Index Projects'){
      this.props.fetchProjectsByUser(this.props.displayedUser);
    }else{
      this.props.fetchProjects();
    }
  }

  renderProjects(){
    return(
      this.props.projects.map((project) => {
        const display = <Link key={project.id} to={`/project/${project.id}`}>
                          <IndexProjectItem
                            key={project.id}
                            title={project.title}
                            mainPicture={project.picture}
                            author={project.authorUsername}
                            featured={project.featured}
                            viewCount={project.view_count} />
                        </Link>;
        if(project.author_id == this.props.displayedUser && this.props.formType === 'User Index Projects'){
          return display;
        }else if(this.props.formType === 'Index Projects'){
          return display;
        }
      })
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
