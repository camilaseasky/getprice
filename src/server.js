const express = require('express');

const routes = require('./shared/infra/routes');

require('./shared/infra/sequelize/index');

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
