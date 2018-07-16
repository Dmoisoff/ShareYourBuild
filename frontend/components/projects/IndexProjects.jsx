import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import IndexProjectItem from './IndexProjectItem';

class IndexProjects extends React.Component{

  componentDidMount(){
    this.props.fetchProjects();
  }

  renderProjects(){
    return(
      this.props.projects.map((project) => {
        return (
          <Link to={`/project/${project.id}`}>
            <IndexProjectItem
              key={project.id}
              title={project.title}
              thumbnail={project.photoUrl}
              author={project.authorUsername}
              featured={project.featured}
              viewCount={project.view_count} />
          </Link>);
      })
    );
  }



  render(){
    if (!this.props.projects) {
      return <div>Loading...</div>;
    }else{
      return(
        <div className='index-background'>
          <p className='index-title'>Builds</p>
          <ul className="index-display-items">
            {this.renderProjects()}
          </ul>
        </div>
      );
    }
  }


}

export default IndexProjects;
