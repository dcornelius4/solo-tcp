const fs = require('fs');

const ws = fs.createWriteStream('./spot.json');

ws.write('{');
ws.write('\n\t');
ws.write('"Name": "leroy",');
ws.write('\n\t');
ws.write('"Age": "4",');
ws.write('\n\t');
ws.write('"Weight": "40 lbs"');
ws.write('\n');
ws.write('}');

ws.end();
