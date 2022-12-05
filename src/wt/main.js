const performCalculations = async () => {
    const {cpus} = await import('node:os');
    const {Worker} = await import('node:worker_threads');
    const workerFile = './src/wt/worker.js';
    const promiseArray = [];

    const runService = (i) => {
        return new Promise((resolve, reject) =>{
            const worker = new Worker(workerFile, {
                workerData: 10 + i
            });
            worker.on('message', resolve);
            worker.on('error', reject);
        })
    }

    for(let i=0; i<=cpus().length; i++) {
        promiseArray.push(runService(i));
    }

    const promiseData = await Promise.allSettled(promiseArray);

    const result = promiseData.map((item) => {
        return {
            status: item.status === 'fulfilled' ? 'resolved' : 'error',
            data: item.status === 'fulfilled' ? item.value : 'null',
        };
    })

    console.log(result);
};

await performCalculations();
