// personal project rentals 

// App.js
handleClick = () => {
  //                    ?    = 
  axios.get(`/api/filter?name=${this.state.userInput}`)
  .then(response => {
    //...
    this.setState()
  })
}

// index.js
app.get("/api/filter", controller.getFilteredSong);


// controller.js

req.query 

