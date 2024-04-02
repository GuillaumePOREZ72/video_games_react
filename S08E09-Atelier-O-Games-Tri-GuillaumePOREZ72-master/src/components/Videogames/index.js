import Videogame from "./Videogame";
import Pagination from "../Pagination";
import PropTypes from "prop-types";
import { sortGamesByName, sortGamesByRating } from "./functions";

const Videogames = ({
  allGames,
  search,
  selectedPlatform,
  searchKind,
  searchRate,
}) => {
  let filteredGames = allGames.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase(), selectedPlatform)
  );

  if (selectedPlatform != "all") {
    filteredGames = filteredGames.filter((game) =>
      game.devices.includes(selectedPlatform)
    );
  }

  if (searchKind != "all") {
    //console.log('testfilter');
    filteredGames = filteredGames.filter((game) =>
      game.genres.includes(searchKind)
    );
  }

  if (searchRate != "all") {
    //console.log("testrate");
    filteredGames = filteredGames.filter((game) => game.rate === parseInt(searchRate)
    );
  }

  return (
    <>
      <div className="videogames-list">
        {filteredGames.map((videogame) => {
          return (
            <Videogame
              key={videogame.id}
              title={videogame.title}
              rate={videogame.rate}
              gamePicture={videogame.gamePicture}
              description={videogame.description}
              devices={videogame.devices}
            />
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

Videogames.propTypes = {
  allGames: PropTypes.array.isRequired,
};

export default Videogames;
