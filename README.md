Welcome to the ShareYourBuild README!

A single page web application built with React and Ruby on Rails. Where DIY enthusiasts share their ideas.

**Features**
* Authentication
  * A user can sign in or sign up from any page via the links on the header. Trying to create a build will redirect the user to the sign in page.
  * The login credentials are verified on the backend and returns any relevant data to the user.
* Created a robust project form that allows users to create and update projects.
  * The form uses a system that allows parent component and multiple child components to share information between them.
  * Using the information sharing I was able to create a system of frontend validations to make sure the form is filled out properly.
  * Users can upload pictures to their projects to help detail their steps.
* Users can leave comments on builds that they enjoy.

**Tools used for Share Your Build** (Languages, Frameworks, Libraries, Etc.)
* Ruby on Rails
* PostgreSQL
* React
* react slick
* Flux
* jQuery
* Gems
  * aws-sdk-s3
  * Jbuilder
  * BCrypt


**Future Features**
* Add a Rich Text Area for formatting instructions
* Enable a search feature for keywords or users


[Share Your Build](https://share-your-build.herokuapp.com/?#/)
