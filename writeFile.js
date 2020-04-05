const { writeFile } = require('fs');

writeFile('./graffiti.txt', 'hello there x', err => {
  if (err) console.error(`Failed to write file: ${err}`);

  console.log('File written successfully');
});