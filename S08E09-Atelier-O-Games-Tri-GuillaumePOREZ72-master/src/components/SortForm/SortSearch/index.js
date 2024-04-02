import React from "react";

const SortSearch = ({setSearch}) => {

     const handleSearchChange = (event) => {
       return setSearch(event.target.value);
     };
    return (
        <fieldset className="sort-form__field">
            <label htmlFor="sort-form__search">Titre</label>
            <input type="text" id="sort-form__search" placeholder="Rechercher un jeu" onChange={handleSearchChange} />
        </fieldset>
    );
};

export default SortSearch;