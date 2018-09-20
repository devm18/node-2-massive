require('dotenv').config(); 
const express = require('express')
, app = express()
, bodyParser = require('body-parser')
, port = process.env.PORT || 3000
, massive = require('massive')
, { create, getOne, getAll, update, remove } = require ('./products_controller')
;
// console.log(process.env.CONNECTION_STRING) // check
app.use(bodyParser.json());

// asynchronous promise, so .then() 
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  // console.log('dbInstance: ', dbInstance); // check
  app.set('db', dbInstance);
  // console.log('dbInstance: ', dbInstance); // check
}).catch(err => console.log(err));

app.post('/api/product', create);
app.get('/api/products', getAll);
app.get('/api/product/:id', getOne);
app.put('/api/product/:id', update);
app.delete('/api/product/:id', remove); 


app.listen(port, () => console.log(`Server listening @ port: ${port}`));
