const http = new EasyHTTP;
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com"
}


// GET
// http.get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


// POST
// http.post("https://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


// PUT
// http.put("https://jsonplaceholder.typicode.com/users/1", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// DELETE
http.delete("https://jsonplaceholder.typicode.com/users/1")
  .then(data => console.log(data))
  .catch(err => console.log(err))