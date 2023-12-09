const paginationLogic = (currentP, resd) => {
    const resdPage = 6;
    const totalPages = Math.ceil(resd.length / resdPage)
    const slideEnd = currentP * resdPage 
    const slideStart = slideEnd - resdPage
    const resdCurrentPage = resd.slice(slideStart, slideEnd)

    const pages = []
    for (let i = 1;i <= totalPages; i++ ){
        pages.push(i)

    }
    return {pages, resdCurrentPage }
}

export { paginationLogic }