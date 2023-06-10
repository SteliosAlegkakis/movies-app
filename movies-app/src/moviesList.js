import { useState } from "react";

const MoviesList = (data) => {
    
    data = data.movies;
    let movies = data.Search;
    const [sort,setSort] = useState("year");

    if(data.Response==='False'){
        return(
            <div className="results-number">
                <h3>Search Results (0)</h3>
            </div>
        )
    }
    
    function handleSort(sort){
        console.log(sort);
        if(sort==="year"){
            movies = movies.sort((a, b) => {
                if (a.Year > b.Year) {
                  return -1;
                }
            });
        }
        else{
            movies = movies.sort((a, b) => {
                return a.Title.localeCompare(b.Title, undefined, { numeric: true })
            });
        }
        console.log(movies);
    }

    handleSort(sort);

    return ( 
        <div>
            <div className="results-sort">
                <h3 className="results-number">Search Results ({movies.length})</h3>
                <select onChange={(e) => setSort(e.target.value)}>
                    <option selected="selected" value="year">Year</option>
                    <option value="a-z">A-Z</option>
                </select>
            </div>
            {movies.map(movie => (
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