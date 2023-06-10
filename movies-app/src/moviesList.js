const MoviesList = (data) => {
    
    const movies = data.movies;
    if(movies.Response==='False'){
        return(
            <div>
                <h3>Could not find any results</h3>
            </div>
        )
    }
    
    return ( 
        <div>
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