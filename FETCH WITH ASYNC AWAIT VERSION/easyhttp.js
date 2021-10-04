class EasyHTTP {
  //GET request
  async get(url) {
    // Await the fetching of the response from the URL
    const response = await fetch(url);

    // Await the converting of that response to an object (JSON object)
    const resData = await response.json()

    // return that obj
    return resData
  }


  // POST
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      // Turn our data into JSON
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData
  }

  // PUT
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      // Turn our data into JSON
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData
  }

  // DELETE
  async delete(url, data) {
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    const resData = await "Resource Deleted";
    return resData
  }

}