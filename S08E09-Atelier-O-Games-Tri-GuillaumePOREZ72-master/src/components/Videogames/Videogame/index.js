import PropTypes from 'prop-types';

const Videogame = ({title, rate, gamePicture, description, devices}) => {
    return (
        <article className="videogame">
            <div className="videogame__rate">
                {
                    (rate === 1 && <span>❤️🖤🖤🖤🖤</span>)
                    || (rate === 2 && <span>❤️❤️🖤🖤🖤</span>)
                    || (rate === 3 && <span>❤️❤️❤️🖤🖤</span>)
                    || (rate === 4 && <span>❤️❤️❤️❤️🖤</span>)
                    || (rate === 5 && <span>❤️❤️❤️❤️❤️</span>)
                    || <span className="norate">Pas encore de note</span>
                }
            </div>
            <figure className="videogame-image">
                <img src={(gamePicture && "assets/img/games/" + gamePicture) || "assets/img/noimg.png"} />
            </figure>
            <div className="videogame-header">
                <h2>{title}</h2>
            </div>
            <div className="videogame-content">
                <p>
                    {description}
                </p>
                
                <div className="read-more">↓ Lire la suite</div>
            </div>
            <div className="videogame-footer">
                <span id="device">
                    {
                        (devices.length <= 0) && <span className="no-device">Information indisponible</span>
                        || (devices.map((device, index) => <img key={index} className="device__img" src={"assets/img/devices/" + device + ".png"} />))
                    }
                </span>
            </div>
        </article>
    );
};

Videogame.propTypes = {
    title: PropTypes.string.isRequired,
    rate: PropTypes.number,
    gamePicture: PropTypes.string,
    description: PropTypes.string.isRequired,
    devices: PropTypes.array
};

export default Videogame;