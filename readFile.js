const { readFile } = require('fs');

readFile('./README.md', 'utf8', (err, text) => {
  if (err) console.error(err);

  console.log(text);
});

