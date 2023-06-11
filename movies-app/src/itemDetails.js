import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const ItemDetails = () => {

    const imdbID = useParams().imdbID;
    let history = useHistory();
    const {data: item, isPending, error} = useFetch('http://www.omdbapi.com/?i='+imdbID+'&plot=full&apikey=ff202fc9');

    return ( 
        <div>
            {error && <h3>{error}</h3>}
            {isPending && <h3>Loading ...</h3>}
            {item && 
            <div className="itemDetails">
                <button onClick={() => history.goBack()}>{"<"}</button>
                <img src={item.Poster} alt="Poster Not Found"></img>
                <div className="info">
                    <div className="header">
                        <h3>{item.Title}<span> ({item.Year})</span></h3>
                        <div className="tags">
                            <h4 className="tag">{item.Genre}</h4>
                            <h4 className="tag">{item.imdbRating}/10</h4>
                            <h4 className="tag">{item.Runtime}</h4>
                        </div>
                    </div>
                    <h4>Plot</h4>
                    <p>{item.Plot}</p>
                    <h4>Casting</h4>
                    <p>{item.Actors}</p>
                    <h4>Director</h4>
                    <p>{item.Director}</p>
                </div>
            </div>}
        </div>
     );
}
 
export default ItemDetails