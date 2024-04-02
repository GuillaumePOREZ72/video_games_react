import SortSearch from "./SortSearch";
import SortOrder from "./SortOrder";
import SortKind from "./SortKind";
import SortRate from "./SortRate";
import SortPlatform from "./SortPlatform";
import React from "react";
import { getPlatformsAndDevices} from './functions'

import propTypes from 'prop-types';



const SortForm = ({ allGames, setSearch, setSelectedPlatform, setSearchKind, setSearchRate, setSearchOrder }) => {
  // Récupération de la liste des plateformes et des genres
  const { platforms, kinds } = getPlatformsAndDevices(allGames);

  return (
    <form className="sort-form">
      <div className="sort-form__fields">
        <SortSearch setSearch={setSearch} />
        <SortPlatform setSelectedPlatform={setSelectedPlatform} platforms={platforms}/>
        <SortKind kinds={kinds} setSearchKind={setSearchKind} />
        <SortRate  setSearchRate={setSearchRate} />
        <SortOrder setSearchOrder={setSearchOrder} />
      </div>
      <button type="reset" className="sort-form__reset">
        Réinitialiser
      </button>
    </form>
  );
};

SortForm.propTypes = {
    allGames: propTypes.array.isRequired
};


export default SortForm;