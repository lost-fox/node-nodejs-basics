import fs from 'fs';
const read = async () => {
    const readPath = './files/fileToRead.txt';
    fs.stat(readPath, (err) => {
        if (!err) {
            fs.readFile(readPath, 'utf-8', (err, data) => {
                if(err) throw err;
                console.log(data);
            })
        } else if (err.code === 'ENOENT') {
            throw new Error ('FS operation failed'); 
        }
    })
};

await read();
