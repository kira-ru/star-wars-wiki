export function createPageList(totalPages) {
    const listOfPages = []

    for (let i = 1; i <= totalPages; i++) {
        listOfPages.push(i);
    }
    return listOfPages
}

