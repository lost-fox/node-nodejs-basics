const rename = async () => {
   const fs = await import('node:fs'); 
   const wrongPath = './src/fs/files/wrongFilename.txt';
   const rightPath = './src/fs/files/properFilename.md';
   
   fs.stat(rightPath, (err) => {
        if (!err) throw new Error('FS operation failed');
   });

   fs.stat(wrongPath, (err) => {
    if (!err) {
        fs.rename(wrongPath, rightPath, (err) => {
            if(err) throw err;
        })
    } else if(err.code === 'ENOENT') {
        throw new Error('FS operation failed');
    }
   })
};

await rename();
