const MoviesList = (data) => {
    
    const movies = data.movies;
    if(movies.Response==='False'){
        return(
            <div className="results-number">
                <h3>Search Results (0)</h3>
            </div>
        )
    }
    
    return ( 
        <div>
            <div className="results-sort">
                <h3 className="results-number">Search Results ({movies.Search.length})</h3>
                <select>
                    <option>Year</option>
                    <option>A-Z</option>
                </select>
            </div>
            {movies.Search.map(movie => (
                <div className="movies-list" key={movie.imdbID}>
                    <div className="movie-preview"  key={movie.imdbID}>
                        <img src={movie.Poster} alt='Poster Not Found'></img>
                        <div>
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                        </div>    
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default MoviesList