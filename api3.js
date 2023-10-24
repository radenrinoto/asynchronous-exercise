const URL = "https://crudapi.co.uk/api/v1/task";
const AUTHORIZATION_KEY = "Bearer drXh2xfEas7yGhdwVXTEIYvmZpKYwxrlVjFIwQhXulMUzxNTaQ";
const tasks = [
  {
    "title": "Asynchronous Exercise",
    "completed": false
  },
  {
    "title": "Function",
    "completed": false
  }
]
const titleModify = "Asynchronous Exercise";

async function getData() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': AUTHORIZATION_KEY
    }
  };

  const response = await fetch(URL, options);
  return await response.json();
};

async function createData(data) {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': AUTHORIZATION_KEY
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(URL, options);
  return await response.json();
}

async function updateData(data) {
  const options = {
    method: 'PUT',
    headers: {
      'Authorization': AUTHORIZATION_KEY
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(URL, options);
  return await response.json();
}

async function deleteData(data) {
  const options = {
    method: 'DELETE',
    headers: {
      'Authorization': AUTHORIZATION_KEY
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(URL, options);
  return await response.json();
}

console.log("Print the first GET method data")
getData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

let _uuid = "";

setTimeout(function() {
  console.log("Create two tasks. We will get a response");
  createData(tasks)
    .then(result => {
      console.log(result)
      _uuid = result.items.find((element) => element.title === titleModify)._uuid;
      console.log(_uuid);
    });
}, 1000);

setTimeout(function() {
  console.log("Print after create the tasks");
  getData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
}, 2000)

setTimeout(function() {
  console.log(`Update the task with _uuid: ${_uuid}`);
  const taskToUpdate = [{
    _uuid,
    completed: true
  }]

  updateData(taskToUpdate)
    .then(result => {
      console.log(result)
    });
}, 3000);

setTimeout(function() {
  console.log("Print after update one task");
  getData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
}, 4000);

setTimeout(function() {
  console.log(`Delete the task with _uuid: ${_uuid}`);
  const taskToDelete = [{
    _uuid
  }]

  deleteData(taskToDelete)
    .then(result => {
      console.log(result)
    });
}, 5000);

setTimeout(function() {
  console.log("Print after delete one task");
  getData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
}, 6000);
