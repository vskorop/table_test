const express = require('express');
const path = require('path');
const cors = require('cors');
const allEntries = require('./routes/allEntries.router');

const app = express();
const PORT = 3030;
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
  }),
);

app.use('/', allEntries);

app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT);
});
