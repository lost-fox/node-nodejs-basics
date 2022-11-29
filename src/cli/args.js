const parseArgs = () => {
    const argv = process.argv.slice(2);
    const answ = [];
    for (let i=0; i<argv.length;i+=2){
        answ.push(`${argv[i]} is ${argv[i+1]}`)
    }
    console.log(answ.join(', '));
};

parseArgs();
