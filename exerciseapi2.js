const url = "https://calm-plum-jaguar-tutu.cyclic.app/todos";

const addTodosData = {
  todoName: "Belajar Membuat API",
  isComplete: false,
};

const updateTodosData = {
  isComplete: true,
};
const todos = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("message error: ", error);
  }
};

const addTodos = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addTodosData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("message error: ", error);
  }
};

const updateTodos = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTodosData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("message error: ", error);
  }
};

const deleteTodosData = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("message error: ", error);
  }
};

// todos()
//   .then((resultData) => {
//     console.log(resultData);
//   })
//   .catch((error) => {
//     console.log("Error Message:", error);
//   });

// addTodos()
//   .then((result) => {
//     console.log("Added Todos:", result);
//   })
//   .catch((error) => {
//     console.log("Error Message:", error);
//   });

updateTodos("65386ee51621ba8f57ee")
  .then((result) => {
    console.log("Updated Data: ", result);
  })
  .catch((error) => {
    console.log("Error Message:", error);
  });

// deleteTodosData("65386ee51625d971ba8f57ee")
//   .then((result) => {
//     console.log("Deleted Data: ", result);
//   })
//   .catch((error) => {
//     console.log("Error Message:", error);
//   });
