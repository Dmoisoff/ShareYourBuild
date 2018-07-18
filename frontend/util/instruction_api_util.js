export const fetchInstructions = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${id}/instructions`
  });
};

export const createInstruction = (instruction,id) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/projects/${id}/instructions`,
    data: instruction ,
    // contentType: false,
    // processData: false
  });
};

export const updateInstruction = (instruction, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/instructions/${id}`,
    data: instruction ,
    // contentType: false,
    // processData: false
  });
};


export const deleteInstruction = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/instructions/${id}`
  });
};


// {instruction: {project_id: 88, instruction_step: 7, body:'test'}}
