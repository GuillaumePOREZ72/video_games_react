import PropTypes from 'prop-types';

const SortKind = ({ kinds, setSearchKind }) => {

    const handleChangeKind = (event) => {
        //console.log('test');
        const inputValue = event.target.value;
        return setSearchKind(inputValue);
    }
    return (
        <fieldset className="sort-form__field">
            <label htmlFor="sort-form__kind">Genre</label>
            <select name="sort-form__kind" id="sort-form__kind" onChange={handleChangeKind}>
                <option value="all">Tous</option>
                {kinds.map((kind, index) => {
                    return (
                        <option key={index} value={kind}>{kind}</option>
                    );
                })
                }
            </select>
        </fieldset>
    );
};

SortKind.propTypes = {
    kinds: PropTypes.array.isRequired
};

export default SortKind;