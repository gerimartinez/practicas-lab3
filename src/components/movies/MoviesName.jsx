
const MoviesName = ({ watchList }) => {

    const returnMovieTitle = (watchlist) => {
    
        const filterDirector = watchlist.filter((list) => list.Director == 'Christopher Nolan' && list.imdbRating > '8.0').map((movie) => (
          movie.Title
        ))
        console.log(filterDirector)
        return filterDirector;
    }
    
    const titlesArray = returnMovieTitle(watchList)
    console.log(titlesArray);
    
    return (
    <>
        {
        titlesArray.map((title) => (
            <h1>{title}</h1>
        ))
        }
    </>
    )
}
export default MoviesName;