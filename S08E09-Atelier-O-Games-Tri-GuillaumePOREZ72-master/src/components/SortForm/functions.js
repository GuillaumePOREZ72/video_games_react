export const getPlatformsAndDevices = (allGames) => {
    // Création d'un tableau qui contient la liste des plateformes
    const platforms = [];

    // Création d'un tableau qui contient la liste des genres
    const kinds = [];

    allGames.forEach((videogame) => {
        // Récupération de la liste des plateformes
        videogame.devices.forEach((device) => {
            if(!platforms.includes(device)) {
                platforms.push(device);
            }
        });

        // Récupération de la liste des genres
        videogame.genres.forEach((genre) => {
            if(!kinds.includes(genre)) {
                kinds.push(genre);
            }
        });
    });

    return{platforms, kinds};
}