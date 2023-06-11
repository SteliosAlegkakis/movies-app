import './App.css';
import Search from "./search";
import Results from "./results";
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemDetails from './itemDetails';

function App() {

  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("movie");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Search setSearch={setSearch} setCategory={setCategory}></Search>
            <Results search={search} category={category}></Results>
          </Route>
          <Route path="/ItemDetails/:imdbID">
            <ItemDetails></ItemDetails>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
