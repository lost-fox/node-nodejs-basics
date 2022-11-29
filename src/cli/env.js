const parseEnv = () => {
    const env = process.env;
    const answ = [];
    const keys = Object.keys(env).filter((key) => {
        return key.includes('RSS_');
    });
    for(let i=0; i<keys.length; i++) {
        answ.push(`${keys[i]}=${env[keys[i]]}`);
    }
    console.log(answ.join('; '));
};

parseEnv();
