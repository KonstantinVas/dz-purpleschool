'use strict';

async function race(promises) {
    return Promise.race(promises);
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 выполнен'), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 2 отклонён'), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 выполнен'), 1000));

race([promise1, promise2, promise3])
    .then(result => console.log('Первый выполнен:', result))
    .catch(error => console.error('Первый отклонён:', error));
