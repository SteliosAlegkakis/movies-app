import { useState } from "react";

const Search = ({setSearch,setCategory}) => {

    const [inputSearch,setInputSearch] = useState(localStorage.getItem('search'));

    function submit(){
        setSearch(inputSearch);
        localStorage.setItem('search',inputSearch);
    }

    return ( 
        <div className="search">
            <select onChange={(e) => setCategory(e.target.value)}>
                <option selected="selected" value="movie">Movies</option>
                <option value="series">Series</option>
            </select>
            <div>
                <input
                    type="text"
                    required
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)} 
                />
                <button onClick={submit}>Search</button>
            </div>
        </div>
    );
}
 
export default Search;