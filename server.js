const express = require('express');

const appName = `clashsoft-apps`;
const port = +process.env.PORT || 40293;
const app = express();

app.use(express.static(`${__dirname}/dist/${appName}`));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/${appName}/index.html`);
});

app.listen(port, () => {
  console.log(appName, 'listening on port', port);
});
