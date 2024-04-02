const SortRate = ({setSearchRate}) => {

       const handleChangeRate = (event) => {
         //console.log('test');
         const inputValue = event.target.value;
         return setSearchRate(inputValue);
       };
    return (
        <fieldset className="sort-form__field">
            <label htmlFor="sort-form__rate">Note</label>
            <select name="sort-form__rate" id="sort-form__rate" onChange={handleChangeRate}> 
                <option value="all">Toutes</option>
                <option value="1">❤️🖤🖤🖤🖤</option>
                <option value="2">❤️❤️🖤🖤🖤</option>
                <option value="3">❤️❤️❤️🖤🖤</option>
                <option value="4">❤️❤️❤️❤️🖤</option>
                <option value="5">❤️❤️❤️❤️❤️</option>
            </select>
        </fieldset>
    );
};

export default SortRate;