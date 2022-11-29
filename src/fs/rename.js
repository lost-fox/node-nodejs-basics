import fs from 'fs';
const rename = async () => {
   const wrongPath = './files/wrongFilename.txt';
   const rightPath = './files/properFilename.md';
   
   fs.stat(rightPath, (err) => {
        if (!err) throw new Error('FS operation failed');
   });

   fs.stat(wrongPath, (err) => {
    if(err.code === 'ENOENT') {
        throw new Error('FS operation failed');
    } else if (!err) {
        fs.rename(wrongPath, rightPath, (err) => {
            if(err) throw err;
        })
    }
   })
};

await rename();
