'use strict';


function request() {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
    req.send();

    req.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        console.log(data);
        // Получаем URL первой способности
        const abilityUrl = data.abilities[0].ability.url;
        console.log(abilityUrl);
        // Делаем запрос для получения информации о способности
        const abilityReq = new XMLHttpRequest();
        abilityReq.open('GET', abilityUrl);
        abilityReq.send();

        abilityReq.addEventListener('load', function () {
            const data = JSON.parse(this.responseText);
            console.log(data.effect_entries[0].effect);
        });
    });
}

request();
