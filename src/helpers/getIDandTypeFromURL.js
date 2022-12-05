/**
 *
 * @param url
 * url kind "https://swapi.dev/api/people/1/"
 * kinds of types {type: people | films | starships | vehicles | species | planets}
 * @returns type and id from url / {type: films, id: 3>}
 */

export function getIDandTypeFromURL(url) {
    const url_array = url.split('/')

    return {type: url_array[url_array.length - 3], id: url_array[url_array.length - 2]}
}


