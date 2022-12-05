import fs from 'fs';
const copy = async () => {
    fs.stat('./src/fs/files_copy', (err) => {
        if (err == null) {
           throw new Error ('FS operation failed');
        }
    });
    fs.stat('./src/fs/files', (err) => {
        if (!err) {
           fs.mkdir('./src/fs/files_copy', (err) => {
                if(err) throw err;
            });
            fs.readdir('./src/fs/files', (err, files) => {
                if(err) throw err;
                for(let i=0; i<files.length; i++){
                    fs.copyFile(`./src/fs/files/${files[i]}`,`./src/fs/files_copy/${files[i]}`, (err) => {
                        if(err) throw err;
                    } )
                }
            })
        } else if (err.code === 'ENOENT') {
            throw new Error ('FS operation failed');  
        }
    })

};

copy();
