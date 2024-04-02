import PropTypes from 'prop-types';

const Pagination = () => {

    return (
        <div className="pagination">
            <div className="pagination__select">
                <label htmlFor="pagination__select">Nombre de jeux par page</label>
                <select name="pagination__select" id="pagination__select" defaultValue={"10"}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div className="pagination__links">
                <a className="pagination__link pagination__link--previous">Précédent</a>
                <a className="pagination__link pagination__link--current">1</a>
                <a className="pagination__link">2</a>
                <a className="pagination__link">3</a>
                <a className="pagination__link">4</a>
                <a className="pagination__link pagination__link--next">Suivant</a>

            </div>
        </div>

    );
};

export default Pagination;