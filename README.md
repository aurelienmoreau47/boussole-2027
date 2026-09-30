# Boussole 2027

Application pour la présidentielle 2027, dans l'esprit d'Elyze : on fait défiler des propositions, on glisse à droite si on est d'accord, à gauche sinon, et un classement des candidats les plus proches de ses idées se construit au fil des votes.

Adresse : https://aurelienmoreau47.github.io/boussole-2027/

## Données

- La plupart des propositions, ainsi que les positions des candidats et leurs sources, viennent des [données ouvertes de MonVote2027](https://monvote2027.fr/donnees).
- Une vingtaine de propositions ont été ajoutées à partir d'articles de presse et de votes au Parlement. Chaque position retenue est rattachée à au moins une source ; une position sans source n'est pas prise en compte.
- Les points positif et négatif de chaque proposition sont des résumés neutres rédigés pour l'application.

## Vie privée

Les votes restent dans le navigateur de chaque personne (stockage local). Ils ne sont envoyés à aucun serveur. L'onglet Méthode permet de copier un code pour les transférer sur un autre appareil.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | L'application (page, styles et logique) |
| `data.json` | Propositions, candidats, positions et sources |
| `sw.js`, `manifest.webmanifest`, `icons/` | Installation sur l'écran d'accueil |

`index.html` et `data.json` sont générés par un script de mise à jour tenu hors de ce dépôt : ne pas les modifier à la main.

## Installer l'appli

- **iPhone** : ouvrir l'adresse dans Safari > bouton Partager > « Sur l'écran d'accueil ».
- **Android** : ouvrir l'adresse dans Chrome > menu ⋮ > « Installer l'application ».
- **Ordinateur** : dans Chrome ou Edge, icône « Installer » à droite de la barre d'adresse.
