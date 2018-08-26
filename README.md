Welcome to the ShareYourBuild README!

A single page web application built with React and Ruby on Rails. Where DIY enthusiasts share their ideas.

**Features**
* Authentication
  * A user can sign in or sign up from any page via the links on the header. Trying to create a build will redirect the user to the sign in page.
  * The login credentials are verified on the backend and returns any relevant data to the user.
* Used RESTful API design to perform full CRUD on projects, instructions, and comments.
  * Constructed a robust project form that allows users to create and update projects.
  * The form uses a system that allows parent component and multiple child components to share information between them.
  * Using the information sharing I was able to create a system of frontend validations to make sure the form is filled out properly.
* Image storage with AWS S3
  * Users can upload pictures to their projects to help detail their steps.
* Created and integrated a rich text editor so users can format their instructions without any packages.

**Tools used for Share Your Build** (Languages, Frameworks, Libraries, Etc.)
* Ruby on Rails
* PostgreSQL
* React
* Redux
* react slick
* Gems
  * aws-sdk-s3
  * Jbuilder
  * BCrypt
  * pg_search


**Future Features**
* Enable a search feature with autocomplete for keywords or users
* Add the ability to like projects


[Share Your Build](https://share-your-build.herokuapp.com/?#/)
