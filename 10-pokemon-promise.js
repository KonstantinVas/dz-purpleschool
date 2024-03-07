'use strict';

function getData(url, errorMessage) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${errorMessage} ${response.status}`);
            }
            return response.json()
        })
}

getData('https://pokeapi.co/api/v2/pokemon/dittos', 'Не удалось получить способность')
    .then(data => {
        const abilityUrl = data.abilities[0].ability.url;
        console.log(data);
        return getData(abilityUrl, 'Ошибочка');
    })
    .then(data => {
        console.log(data.effect_entries[0].effect);
    })
    .catch(error => console.log(error.message));


