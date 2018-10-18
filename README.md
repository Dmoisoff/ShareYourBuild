Welcome to the ShareYourBuild README!

A single page web application built with React and Ruby on Rails. Where DIY enthusiasts share their ideas.

[Live Link](https://share-your-build.herokuapp.com/?#/)

**Technology used for Share Your Build** (Languages, Frameworks, Libraries, Etc.)

- Ruby on Rails
- PostgreSQL
- React
- Redux
- react slick
- Gems
  - aws-sdk-s3
  - Jbuilder
  - BCrypt
  - pg_search

**Features**

- **Authentication**

  ![](./readme_assets/protected_routes_auth.gif)

- A user can sign in or sign up from any page via the links on the header.
- Protected Authentication routes for creating and editing projects.
- The login credentials are verified on the backend and returns any relevant data to the user.

- **Project Creation**

  ![](./readme_assets/Create_project_fast.gif)

  - Used RESTful API design to perform full CRUD on projects, instructions, and comments.
  - The project form aggregates data from each instruction component in order to limit Ajax requests.
  - Created and integrated a rich text editor so users can format their instructions.
  - Image storage with AWS S3, so users can upload multiply images per instruction.

- **Search Bar**

  ![](./readme_assets/search_function_trim.gif)

  - Quickly access projects on the backend and display

**Code Sample**
The code below is used to append multiple instructions to a single formdata to limit the amount of Ajax calls to the backend.

```js
appendInstructions(instructions, projectId) {
  const formDataInstruction = new FormData();
  instructions.forEach((instruction, i) => {
    formDataInstruction.append(
      `instructions[${i}][body]`,
      instruction["body"]
    );
    formDataInstruction.append(
      `instructions[${i}][title]`,
      instruction["title"]
    );
    formDataInstruction.append(
      `instructions[${i}][instruction_step]`,
      instruction["step"]
    );
    formDataInstruction.append(`instructions[${i}][project_id]`, projectId);
    if (instruction["id"]) {
      formDataInstruction.append(`instructions[${i}][id]`, instruction["id"]);
      formDataInstruction.append(
        `instructions[${i}][imagesStorageId]`,
        instruction["imagesStorageId"]
      );
    }
    if (instruction["images"].length) {
      instruction["images"].forEach((file, j) => {
        formDataInstruction.append(`instructions[${i}][images][${j}]`, file);
      });
    }
  });
  return formDataInstruction;
}
```

The code below is how I parse the formdata with multiple instructionStep

```rb
def update_instructions
  index = 0
  while params['instructions'].dig("#{index}")
    saved_images_id = []
    updated_images = []
    instruction_params = params['instructions'].dig("#{index}")
    @instruction = Instruction.find(instruction_params[:id])
    if instruction_params[:images]
      updated_images = instruction_params[:images].values
    end
    unless instruction_params[:imagesStorageId] === ''
      saved_images_id = instruction_params[:imagesStorageId].split(',')
    end
    @instruction.images.attachments.each do |image|
      unless(saved_images_id.include?(image.id.to_s))
        @instruction.images.find_by_id(image.id).destroy
      end
    end
    updated_images.each do |image|
      unless image.class === "String"
        @instruction.images.attach(image)
      end
    end
    permitted = instructions_params(params['instructions'].dig("#{index}"))
    if @instruction.update_attributes(permitted)
      @instruction.save
      index += 1
    else
      render json: @instruction.errors.full_messages, status: 422
    end
  end
end
```

**Future Features**

- Enable a search feature with autocomplete for keywords or users
- Add the ability to like projects
