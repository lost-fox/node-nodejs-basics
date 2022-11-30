const write = async () => {
    const fs = await import('node:fs');
    const {stdin} = await import('node:process');
    const writePath = './src/streams/files/fileToWrite.txt';
    const fileStream = fs.createWriteStream(writePath, {encoding: 'utf-8'});

    stdin.on('data', data => {
        fileStream.write(data.toString());
    });
};

await write();
