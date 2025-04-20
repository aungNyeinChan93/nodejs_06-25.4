const task = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let status = true;
            if (status) resolve('Success');
            else reject('fail')
        }, 4000)
    })
}

console.log(await task());
console.log('~~~~~~');
task().then(res => console.log(res));
console.log('~~~~~~');

const task2 = async () => {
    try {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                const status = true;
                if (status) {
                    resolve('success');
                } else {
                    reject('fail');
                }
            }, 4000);
        });
    } catch (error) {
        console.error(error);
    }
}

console.log(await task2());
task2().then(res => console.log(res))

const task3 = async () => {
    try {
        // 
        return await 'success'
    } catch (error) {
        console.log(error);
    }
}
console.log(await task3());
task3().then(res => console.log(res))



