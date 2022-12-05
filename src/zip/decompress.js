const decompress = async () => {
    const {createGunzip} = await import('node:zlib');
    const { pipeline } = await import('node:stream');
   const fs = await import('node:fs');
   const zlibPath = './src/zip/files/fileToCompress.txt';
   const gzPath = './src/zip/archive.gz';

   const fileStream = fs.createReadStream(gzPath);
   const writeStream = fs.createWriteStream(zlibPath);

   const gunzip = createGunzip();

   pipeline(fileStream, gunzip, writeStream, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
     }
      fs.unlink(gzPath, (err) => {
      if(err) throw err;
    })
   } )
   
};

await decompress();
