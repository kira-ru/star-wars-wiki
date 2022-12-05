import {
    JPG,
    STARTWARS_VG_IMG_CHAR,
    STARWARS_VG_IMG_FILM, STARWARS_VG_IMG_PLANETS, STARWARS_VG_IMG_SPECIES,
    STARWARS_VG_IMG_STARSHIPS,
    STARWARS_VG_IMG_VEHICLES
} from "../constants/sw-visualguide";

async function getCharactersData(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.error('Fetch error', response.status)
            return false
        }

        return await response.json()

    } catch (error) {
        console.error('Fetch error', error.message)
        return false
    }
}

// async function fetchPersonImage(url) {
//     try {
//         const id = getIDfromURL(url)
//         const response = await getCharactersData(STARWARS_CHAR + id + JSON)
//
//         return response.image
//     } catch(error) {
//         console.error('Fetch image error', error.message)
//         return false
//     }
// }

// определять какую картинку (персонажа, транспорта или планеты нам надо вызывть)
// обеденить get perdon img + get id from url = function (url) { берем из юрл сущность || тип обьекта , затем id }
//kinds of types {type: peoples | films | starships | vehicles | species | planets}
export function getItemImage(id, type) {
    switch (type) {
        case ('people'):
            return STARTWARS_VG_IMG_CHAR + id + JPG
        case ('films'):
            return  STARWARS_VG_IMG_FILM + id + JPG
        case ('starships'):
            return  STARWARS_VG_IMG_STARSHIPS + id + JPG
        case ('vehicles'):
            return  STARWARS_VG_IMG_VEHICLES + id + JPG
        case ('species'):
            return  STARWARS_VG_IMG_SPECIES + id + JPG
        case ('planets'):
            return  STARWARS_VG_IMG_PLANETS + id + JPG
        default:
            return 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }
}

