const express = require('express');
const routes = require('./routes');

require('./shared/infra/typeorm/index');


const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333, () => {
  console.log('Server started on port 333!');
});
