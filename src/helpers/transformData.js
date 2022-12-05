import {getIDandTypeFromURL} from "./getIDandTypeFromURL";
import {getItemImage} from "./getCharactersData";

export function transformData(item) {
    const {id, type} = getIDandTypeFromURL(item.url)
    const image = getItemImage(id, type)

    return {...item, id, image}
}