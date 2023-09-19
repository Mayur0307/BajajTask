const express = require("express");
const bodyParser = require('body-parser');
const apiRoutes = require('./routes.js');

const app = express();

app.use(express.json());

  app.use('/api', apiRoutes);
  
  
  app.listen(4000, () => {
    console.log("listening on port 4000");
  });