import useFetch from "./useFetch";
import MoviesList from "./moviesList";

const Results = ({search,category}) => {

    const {data: movies, isPending, error} = useFetch('http://www.omdbapi.com/?s='+search+'&type='+category+'&apikey=ff202fc9');
    
    return ( 
        <div>
            {error && <h3>{error}</h3>}
            {isPending && <h3>Loading ...</h3>}
            {movies && <MoviesList movies={movies}/>}
        </div>
     );
}
 
export default Results;