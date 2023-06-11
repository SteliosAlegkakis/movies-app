import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

const ItemDetails = () => {
    const imdbID = useParams();
    console.log(imdbID);
    let history = useHistory();
    return ( 
        <div>
            <h3>Item Details </h3>
            <button onClick={() => history.goBack()}>Go back</button>
        </div>
     );
}
 
export default ItemDetails