const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {encoding: 'utf8', highWaterMark: 35 });

rs.on('data', data => {
  console.log(data);
});
