const fs = require('fs');
const file = "./01-read-file/text.txt";


const readStream = new fs.ReadStream(file, {encoding: 'utf-8'});

readStream.on('readable', function(){
    let data = readStream.read();
    console.log(data);
});
 
readStream.on('end', function(){
    console.log("Reading done. End of file");
});