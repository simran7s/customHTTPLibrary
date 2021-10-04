const http = new easyHTTP

// GET
// http.get("https://jsonplaceholder.typicode.com/posts", function (error, response) {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(response)
//   }
// })

// POST

//create data first
const data = {
  title: 'Custom Post',
  body: "this is a custom post"
}
// make request and send back reponse of post we made
// http.post("https://jsonplaceholder.typicode.com/posts", data, function (error, post) {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(post)
//   }
// })



// PUT
http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (error, post) {
  if (error) {
    console.log(error)
  } else {
    console.log(post)
  }
})

//DELETE
http.delete("https://jsonplaceholder.typicode.com/posts/1", function (error, response) {
  if (error) {
    console.log(error)
  } else {
    console.log(response)
  }
})