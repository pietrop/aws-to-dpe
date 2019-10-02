const fs = require('fs');
const awsToDpe = require('./index.js');

const awsTranscript = require('./sample/WSJ8623212922.mp3.json');

const res = awsToDpe(awsTranscript);

fs.writeFileSync('./sample/output/dpe.json',JSON.stringify(res,null,2) )
console.log(res)