const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', { encoding: 'utf8' });
const ws = fs.createWriteStream('copy.md', { encoding: 'utf8' });

rs.on('data', data => {
  ws.write(data);
});

rs.on('end', () => {
  ws.end();
});
