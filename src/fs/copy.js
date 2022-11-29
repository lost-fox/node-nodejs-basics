import fs from 'fs';
const copy = async () => {
    fs.stat('./files_copy', (err) => {
        if (err == null) {
           throw new Error ('FS operation failed');
        }
    });
    fs.stat('./files', (err) => {
        if (!err) {
           fs.mkdir('files_copy', (err) => {
                if(err) throw err;
            });
            fs.readdir('./files', (err, files) => {
                if(err) throw err;
                for(let i=0; i<files.length; i++){
                    fs.copyFile(`./files/${files[i]}`,`./files_copy/${files[i]}`, (err) => {
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
