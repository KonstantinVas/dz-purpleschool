'use strict';

function checkBirthdayUser(birthday) {
    const now = new Date();
    const formatDate = new Date(birthday);
    const age = now.getFullYear() - formatDate.getFullYear();

    if (age < 14) {
        return false;
    }

    if (age === 14) {
        const birthMonth = formatDate.getMonth();
        const currentMonth = now.getMonth();

        if (currentMonth < birthMonth) {
            return false;
        }

        if (currentMonth === birthMonth) {
            const birthDay = formatDate.getDate();
            const currentDay = now.getDate();

            if (currentDay < birthDay) {
                return false;
            }
        }
    }
    return true;
}

console.log(checkBirthdayUser('2010-03-08'))
