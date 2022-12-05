import {getIDandTypeFromURL} from "./getIDandTypeFromURL";

export async function getRelatedItems(items, fetchWithBQ) {
    const itemsID = items.map((item) => getIDandTypeFromURL(item))
    console.log('fetching')
    const itemsData = await Promise.all(itemsID.map(async ({id, type}) => {
        const response = await fetchWithBQ(`${type}/${id}`)
        return response.data
    }))

    return itemsData ? {data: itemsData} : {error: 'fetching error'}
}