import fs from 'fs';
const list = async () => {
    const filesPath = './src/fs/files';
    fs.stat(filesPath, (err) => {
        if (!err) {
          fs.readdir(filesPath, (err, files) => {
            if(err) throw err;
            console.log(files);
            })  
        } else if (err.code === 'ENOENT') {
            throw new Error ('FS operation failed'); 
        }
    })
};

await list();
