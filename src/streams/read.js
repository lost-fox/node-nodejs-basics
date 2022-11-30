const read = async () => {
    const fs = await import('node:fs');
    const {stdout} = await import('node:process');
    const readPath = './src/streams/files/fileToRead.txt';
    const fileStream = fs.createReadStream(readPath, {encoding: 'utf-8'});
    
    fileStream.on('readable', () => {
       let data = fileStream.read();
       if(data != null) {
        stdout.write(data);
        }; 
    })

    fileStream.on('end', () => {});
};

await read();
