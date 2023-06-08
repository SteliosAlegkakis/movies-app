import useFetch from "./useFetch";

const Results = ({search,category}) => {

    const {data: movies, isPending, error} = useFetch('http://www.omdbapi.com/?s='+search+'&type='+category+'&apikey=ff202fc9');
    console.log(movies.Search);

    return ( 
        <div>
            {search}+{category}
        </div>
     );
}
 
export default Results;