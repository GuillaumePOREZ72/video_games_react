import Videogames from "../Videogames/";
import SortForm from "../SortForm/";
import allGames from "/src/data/videogames.js";
import { useState } from "react";

const App = () => {
    
  const [search, setSearch] = useState("");

  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const [searchKind, setSearchKind] = useState("all");

  const [searchRate, setSearchRate] = useState("all");

  console.log();
 
 
  //console.log('La valeur a été changée');
  return (
    <>
      <h1>O'Games</h1>
      <SortForm
        setSearch={setSearch}
        setSelectedPlatform={setSelectedPlatform}
        setSearchKind={setSearchKind}
        setSearchRate={setSearchRate}

        allGames={allGames}
      />
      <Videogames
        search={search}
        selectedPlatform={selectedPlatform}
        searchKind={searchKind}
        searchRate={searchRate}
        allGames={allGames}
      />
    </>
  );
};

export default App;
