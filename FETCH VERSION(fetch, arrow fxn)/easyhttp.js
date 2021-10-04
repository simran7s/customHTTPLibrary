class EasyHTTP {
  //GET request
  get(url) {
    // NEED TO PASS AS A PROMISE
    return new Promise((resolve, reject) => {
      fetch(url)
        // Get the response from URL and convert to object (that is returned)
        .then(res => res.json())
        // Then we can access that response and use it how we like as DATA
        .then(data => resolve(data))
        // Log any errors
        .catch(err => reject(err))
    })
  }


  // POST
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        // Turn our data into JSON
        body: JSON.stringify(data)
      })
        // Get the response from URL and convert to object (that is returned)
        .then(res => res.json())
        // Then we can access that response and use it how we like as DATA
        .then(data => resolve(data))
        // Log any errors
        .catch(err => reject(err))
    })
  }

  // PUT
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        // Turn our data into JSON
        body: JSON.stringify(data)
      })
        // Get the response from URL and convert to object (that is returned)
        .then(res => res.json())
        // Then we can access that response and use it how we like as DATA
        .then(data => resolve(data))
        // Log any errors
        .catch(err => reject(err))
    })
  }

  // DELETE
  delete(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
        // Get the response from URL and convert to object (that is returned)
        .then(res => res.json())
        // Then we can access that response and use it how we like as DATA
        .then(data => resolve("RESOURCE DELETED"))
        // Log any errors
        .catch(err => reject(err))
    })
  }

}