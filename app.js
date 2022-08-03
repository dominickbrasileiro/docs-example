const express = require('express');
const swagger = require('swagger-ui-express');
const YAML = require('yamljs');

const openapiDocument = YAML.load('openapi.yaml');

const app = express();

app.use('/docs', swagger.serve, swagger.setup(openapiDocument));

app.listen(4040, () => {
  console.log('Server is running on http://0.0.0.0:4040');
});