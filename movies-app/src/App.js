import './App.css';
import Search from "./search";
import Results from "./results";
import { useState } from 'react';

function App() {

  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("movies");

  return (
    <div className="App">
      <Search setSearch={setSearch} setCategory={setCategory}></Search>
      <Results search={search} category={category}></Results>
    </div>
  );
}

export default App;
