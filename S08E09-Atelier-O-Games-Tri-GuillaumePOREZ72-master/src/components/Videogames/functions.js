/**
 * Permet de trier un tableau de jeux par nom
 * 
 * @param {Array} games Le tableau des jeux
 * @param {String} order L'ordre de tri (asc ou desc)
 * @returns Un tableau de jeux triés dans l'ordre demandé
 */
export function sortGamesByName (games, order) {
  return games.sort((a, b) => {
    if (order === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
}

/**
 * Permet de récupérer les jeux disponibles sur un device
 * 
 * @param {Array} games le tableau des jeux
 * @param {String} device le nom du device (playstation, xbox, windows, linux, mac, sega, nintendo, arcade, atari)
 * @returns Un tableau des jeux qui sont disponibles sur le device demandé
 */
export function getGamesByDevice (games, device) {
  return games.filter((game) => game.devices.includes(device));
}

/**
 * Permet de trier un tableau de jeux par note
 * 
 * @param {Array} games le tableau des jeux
 * @param {String} order l'ordre de tri (asc ou desc)
 * @returns Un tableau des jeux triés par note dans l'ordre demandé
 */
export function sortGamesByRating (games, order) {
  return games.sort((a, b) => {
    if (order === 'asc') {
      return a.rate - b.rate;
    } else {
      return b.rate - a.rate;
    }
  });
}

