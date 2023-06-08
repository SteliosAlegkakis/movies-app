import { useState } from "react";

const Search = ({setSearch,setCategory}) => {

    const [inputSearch,setInputSearch] = useState("");
    const [selectedCategory,setSelectedCategory] = useState("movie");

    function submit(){
        setSearch(inputSearch);
        setCategory(selectedCategory);
    }

    return ( 
        <div className="search">
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
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