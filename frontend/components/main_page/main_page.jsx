import React from 'react';
import Slides from './../slides/Slides';
import LetsShare from './../slides/Slides_Text';
import IndexProjectsContainer from './../projects/IndexProjectsContainer';



const HomePage = () => {
  return(
  <div className='main-page'>
    <Slides />
    <IndexProjectsContainer />
  </div>
  );
};


export default HomePage;
