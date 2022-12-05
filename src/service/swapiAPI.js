import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {SWAPI_ROOT_2} from "../constants/swapiAPI";
import {transformData} from "../helpers";
import {getRelatedItems} from "../helpers/getRelatedItems";

const baseQuery = fetchBaseQuery({
    baseUrl: SWAPI_ROOT_2,
});
//
// transformResponse: (response) => {
//     const {results: persons} = response;
//
//     const personsWithImage = persons.map(person => {
//         const id = getIDfromURL(person.url)
//         const image = getPersonImage(id)
//
//         return {...person, id, image}
//     })
//
//     return {...response, results: personsWithImage}
// },


const baseQueryWithTransform = async (args, api, extraOptions) => {
    try {
        const response = await baseQuery(args, api, extraOptions)
        const {data} = response

        if (data.results) {
            const {results: items} = data

            const personsWithAdditionalData = items.map(item => transformData(item))

            return {data: {...data, results: personsWithAdditionalData}}
        }

        return {data: transformData(data)}
    } catch (e) {
        console.error('fetching error:', e.message)
        return {error: 'Fetching error'}
    }
}

export const swapiAPI = createApi({
    reducerPath: 'starWarsApi',
    baseQuery: baseQueryWithTransform,
    endpoints: (builder) => ({

        getPeople: builder.query({
            query: (page) => `people/?page=${page}`,

        }),

        getPerson: builder.query({
            query: (id) => `people/${id}`,
        }),

        getRelatedStarships: builder.query({
            async queryFn(starships, _queryApi, _extraOptions, fetchWithBQ) {
                try {
                    return await getRelatedItems(starships, fetchWithBQ)
                } catch (e) {
                    console.error(e.message)
                }
            }
        }),

        getRelatedVehicles: builder.query({
            async queryFn(vehicles, _queryApi, _extraOptions, fetchWithBQ) {
                try {

                    return await getRelatedItems(vehicles, fetchWithBQ)
                } catch (e) {
                    console.error(e.message)
                }
            }
        }),
    })
})


export const {
    useGetPeopleQuery,
    useGetPersonQuery,
    useGetRelatedStarshipsQuery,
    useGetRelatedVehiclesQuery,
} = swapiAPI
