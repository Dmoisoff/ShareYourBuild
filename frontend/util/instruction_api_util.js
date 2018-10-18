export const fetchInstructions = id => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${id}/instructions`
  });
};

export const fetchInstruction = id => {
  return $.ajax({
    method: "GET",
    url: `/api/instructions/${id}`
  });
};

export const createInstruction = (instruction, id) => {
  return $.ajax({
    method: "POST",
    url: `/api/projects/${id}/instructions`,
    data: instruction,
    contentType: false,
    processData: false
  });
};

export const updateInstruction = (instruction, id) => {
  return $.ajax({
    method: "PATCH",
    url: `api/instructions/${id}`,
    data: instruction,
    contentType: false,
    processData: false
  });
};

export const deleteInstruction = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/instructions/${id}`
  });
};

export const updateInstructions = instructions => {
  return $.ajax({
    method: "PATCH",
    url: `api/instructions/update`,
    data: instructions,
    contentType: false,
    processData: false
  });
};

export const createInstructions = (instructions, id) => {
  return $.ajax({
    method: "POST",
    url: `/api/projects/${id}/instructions`,
    data: instructions,
    contentType: false,
    processData: false
  });
};
