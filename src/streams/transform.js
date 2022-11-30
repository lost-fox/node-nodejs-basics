const transform = async () => {
    const {stdout, stdin} = await import('node:process');
    const {Transform} = await import('node:stream');

    const createReverses = () => {
        return new Transform({
            transform(chunk, encoding, callback) {
                const reverse = chunk.toString().split('').reverse().join('');
                callback(null, reverse)
            }
        })
    }
  
    const reverse = createReverses();
    stdin.pipe(reverse).pipe(stdout);
};

await transform();
