import PropTypes from 'prop-types';


const SortPlatform = ({platforms, setSelectedPlatform}) => {

    const handleChangePLatform = (event)  => {

        const inputValue = event.target.value;
        
        return  setSelectedPlatform(inputValue);
    };

    return (
        <fieldset className="sort-form__field">
            <label htmlFor="sort-form__platform">Plateforme</label>
            <select name="sort-form__platform" id="sort-form__platform" onChange={handleChangePLatform}>
                <option value="all">Toutes</option>
                {platforms.map((platform, index) => {
                    return (
                        <option key={index} value={platform}>{platform}</option>
                    );
                })
                }
            </select>
        </fieldset>
    );
};

SortPlatform.propTypes = {
    platforms: PropTypes.array.isRequired
};

export default SortPlatform;