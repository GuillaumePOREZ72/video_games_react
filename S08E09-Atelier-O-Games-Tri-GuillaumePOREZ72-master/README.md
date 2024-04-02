# S08E09 - Atelier O'Games - Tri

On retrouve notre projet O'Games. On souhaite pouvoir trier les jeux selon des divers critères.

## :zero: Découverte

Prends connaissance du code qui a été ajouté au projet. 

Une nouvelle zone est présente en haut de page et permet de filtrer et de trier les résultats.

Par défaut tous les jeux sont affichés.

:warning: Attention! Si plusieurs filtres sont actifs, il faut les appliquer en même temps (par exemple si l'utilisateur a tapé "dragon" dans la barre de recherche, et qu'il sélectionne "xbox" dans le select, il faut afficher les jeux qui contiennent "dragon" et qui sont sur xbox)

## :one: Recherche par nom

La première zone permet de filtrer les jeux par nom. 

- Rends l'input fonctionnel, à chaque fois que l'utilisateur tape une lettre, les jeux sont filtrés en fonction de ce qu'il a tapé.
  - Pour te simplifier la tâche par la suite, dans le composant `Videogames` crée un nouveau tableau qui va contenir les jeux filtrés, et utilise ce tableau pour afficher les jeux. Tu peux utiliser la fonction `filter` [documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)

<details>
<summary>Indices</summary>

- Crée un state dans le composant `App` qui va contenir la valeur de l'input
- Crée une fonction qui va mettre à jour ce state

- Transmets la fonction au composant `SortForm` via les props
- Dans le composant `SortForm`, transmets la fonction au composant `SortSearch` via les props
- Dans le composant `SortSearch`, utilise la fonction pour mettre à jour le state à chaque fois que l'utilisateur tape une lettre

- Dans le composant `App`, transmets la valeur du state au composant `Videogames` via les props
- Dans le composant `Videogames`, utilise la valeur du state pour filtrer les jeux

- Fais attention à la casse, l'utilisateur peut utiliser des majuscules et des minuscules

</details>

## :two: Tri par plateforme

La deuxième zone permet de trier les jeux par plateforme.

- Rends le select fonctionnel, à chaque fois que l'utilisateur sélectionne une plateforme, les jeux sont triés en fonction de ce qu'il a sélectionné.

<details>
<summary>Indices</summary>

- Sert toi des étapes de l'exercice précédent, elles sont très similaires
- Tu peux initialiser ton state avec la valeur "all" (valeur par défault du champ select)
</details>

## :three: Tri par genre

La troisième zone permet de trier les jeux par genre.

- Rends le select fonctionnel, à chaque fois que l'utilisateur sélectionne un genre, les jeux sont triés en fonction de ce qu'il a sélectionné.

## :four: Tri par note

La quatrième zone permet de trier les jeux par note.

- Rends le select fonctionnel, à chaque fois que l'utilisateur sélectionne une note, les jeux sont triés en fonction de ce qu'il a sélectionné.

<details>
<summary>Indice</summary>

La note arrive au format chaîne de caractères, il faut la convertir en nombre pour pouvoir la comparer avec la note du jeu.

</details>

## :five: Ordre de tri

La cinquième zone permet de choisir l'ordre de tri.

- Rends le select fonctionnel, à chaque fois que l'utilisateur sélectionne un ordre de tri, les jeux sont triés en fonction de ce qu'il a sélectionné.

<details>

<summary>Indices</summary>

- Dans le composant `Videogames`, deux fonctions sont importées depuis le fichier functions.js (`sortGamesByName` et `sortGamesByRating` ).
- Selon la sélection de l'utilisateur, il faut utiliser l'une ou l'autre de ces fonctions pour trier les jeux.
  - N'hésite pas à regarder les fonctions pour comprendre comment elles marchent.

</details>

## :six: Reset

- Un bouton "reset" est présent en bas de page, il permet de réinitialiser les filtres et de réafficher tous les jeux.
- Rends le bouton fonctionnel.

<details>
<summary>Indices</summary>

- Tu peux créer une fonction qui remet à chaque state sa valeur par défaut, et appeler cette fonction quand l'utilisateur clique sur le bouton "reset".

</details>

## :star: Bonus (Attention c'est costaud !)

Un composant `Pagination` est appelé dans le composant `Videogames`. Il permet de naviguer entre les pages de jeux.

- Dans le composant `Videogames`, crée un state qui va contenir un objet
  - Cet objet va contenir les informations de pagination (nombre de jeux par page, page actuelle)

- Transmets au composant `Pagination` via les props:
  - La fonction qui permet de mettre à jour le state
  - L'objet qui contient les informations de pagination
  - Le nombre total de jeux déjà triés avec les critères de recherche (en comptant le nombre d'entrées dans le tableau par exemple)

- Utilise les props dans le composant `Pagination` pour mettre en place les fonctionnalités suivantes:
  - Quand l'utilisateur clique sur un lien, les jeux de la page correspondante sont affichés
  - Quand l'utilisateur clique sur un lien, le lien correspondant est mis en surbrillance
  - Quand l'utilisateur clique sur un lien, les autres liens ne sont plus en surbrillance
  - Quand l'utilisateur clique sur un lien, le lien "précédent" est désactivé si on est sur la première page
  - Quand l'utilisateur clique sur un lien, le lien "suivant" est désactivé si on est sur la dernière page

<details>
<summary>Indices</summary>

- Pour récupérer le nombre de pages possibles à partir du nombre total de jeux et du nombre de jeux par page, tu peux utiliser la fonction `Math.ceil` [documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/ceil)
- Pour trier les jeux en fonction de la page actuelle, tu peux utiliser la fonction `slice` [documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice)


</details>
