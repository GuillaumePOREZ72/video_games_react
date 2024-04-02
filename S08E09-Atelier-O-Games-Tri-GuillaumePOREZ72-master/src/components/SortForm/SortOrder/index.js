const SortOrder = () => {
 
    return (
        <fieldset className="sort-form__field">
            <label htmlFor="sort-form__order">Ordre</label>
            <select name="sort-form__order" id="sort-form__order" defaultValue="name-asc">
                <option value="name-asc">Nom du jeu (A à Z)</option>
                <option value="name-desc">Nom du jeu (Z à A)</option>
                <option value="rate-asc">Note croissante (1 à 5)</option>
                <option value="rate-desc">Note décroissante (5 à 1)</option>
            </select>
        </fieldset>
    );
};

export default SortOrder;