import fs from 'fs';
const remove = async () => {
    const removeFile = './files/fileToRemove.txt';
    fs.stat(removeFile, (err) => {
        if (!err) {
            fs.unlink(removeFile, (err) => {
                if(err) throw err;
            })
        } else if (err.code === 'ENOENT') {
            throw new Error ('FS operation failed');   
        }
    })
};

await remove();
