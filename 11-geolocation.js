'use strict';

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Ошибка'))
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position);
            }),
                error => {
                    reject(error);
                }
        }
    });
}

getCurrentPosition()
    .then(position => {
        console.log('latitude', position.coords.latitude)
        console.log('longitude', position.coords.longitude)
    })
    .catch(error => {
        if (error.code === error.PERMISSION_DENIED) {
            console.log('Ты отказался');
        } else {
            console.error('Error', error.message);
        }
    })
