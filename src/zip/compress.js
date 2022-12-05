const compress = async () => {
   const {createGzip} = await import('node:zlib');
   const { pipeline } = await import('node:stream');
   const fs = await import('node:fs');
   const zlibPath = './src/zip/files/fileToCompress.txt';
   const gzPath = './src/zip/archive.gz';
   
   const fileStream = fs.createReadStream(zlibPath, {encoding: 'utf-8'});
   const writeStream = fs.createWriteStream(gzPath);

   const gzip = createGzip();

   pipeline(fileStream, gzip, writeStream, (err) => {
      if (err) {
         console.error('An error occurred:', err);
         process.exitCode = 1;
      }
       fs.unlink(zlibPath, (err) => {
       if(err) throw err;
   })
   })
};

await compress();
