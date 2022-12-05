const calculateHash = async () => {
    const {createHash} = await import('node:crypto');    
    const hash = createHash('sha256');
    const path = './src/hash/files/fileToCalculateHashFor.txt';

    hash.update(path);
    console.log(hash.digest('hex'));
};

await calculateHash();
