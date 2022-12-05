import fs from 'fs';
const create = async () => {
    const path = './src/fs/files/fresh.txt';
    const text = 'I am fresh and young';
    fs.stat(path, (err) => {
        if (err == null) {
            throw new Error('FS operation failed');
        } else if (err.code == 'ENOENT') {
             fs.open(path, 'w', (err) => {
                if(err) throw err;
            });
            fs.appendFile(path, text, (err) => {
                if(err) throw err;
            })
        }
    })    
};

await create();
