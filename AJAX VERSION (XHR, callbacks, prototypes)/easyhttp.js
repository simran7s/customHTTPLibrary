function easyHTTP() {
  this.http = new XMLHttpRequest();
}


// GET REQUEST
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  // How to use this correctly without using arrow fxn
  let self = this
  this.http.onload = () => {
    // use self here instead of this bc not an arrow fxn
    if (self.http.status === 200) {
      // Need a call back too avoid non-async issues 
      callback(null, self.http.responseText)
    } else {
      callback("ERROR: " + self.http.status)
    }
  }


  this.http.send()
}

// POST REQUEST
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true)
  this.http.setRequestHeader('Content-type', 'application/json')

  let self = this
  this.http.onload = () => {
    // response text is the new post we just added
    callback(null, self.http.responseText)
  }

  // Need to turn our data into JSON before sending
  this.http.send(JSON.stringify(data))
}



// PUT REQUEST
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true)
  this.http.setRequestHeader('Content-type', 'application/json')

  let self = this
  this.http.onload = () => {
    // response text is the new post we just added
    callback(null, self.http.responseText)
  }

  // Need to turn our data into JSON before sending
  this.http.send(JSON.stringify(data))
}




// DELETE REQUEST

easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  // How to use this correctly without using arrow fxn
  let self = this
  this.http.onload = () => {
    // use self here instead of this bc not an arrow fxn
    if (self.http.status === 200) {
      // Need a call back too avoid non-async issues 
      callback(null, "Post Deleted")
    } else {
      callback("ERROR: " + self.http.status)
    }
  }


  this.http.send()
}