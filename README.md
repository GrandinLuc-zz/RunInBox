# RunInBox

## **Client** : avec Vue.js

### Description

Le site que nous avons souhaité faire est un site du style e-commerce. L’idée première de ce site internet était de créer un site ou il est possible de commander des boxs de produits qui arriveraient tous les mois. Néanmoins, afin de pouvoir intégrer l’utilisation d’une API a notre projet, nous avons choisi de créer un site qui constitue des paniers de produits aléatoirement parmi une liste de produits couramment consommé. Pour chaque produit affiché aléatoirement sur le site, un script javascript va scrapper depuis le site de photos libre de droits Unplash des images correspondantes aux items de la liste aléatoire crée.
Nous avons également une page About et deux pages : Sign in et Sign up, respectivement pour se connecter à son profil et pour se créer un compte client. Pour créer les pages d’inscription et de connexion, nous avons ajouté de légères animations, ainsi que dans le burger menu qui s’affiche en format téléphone.
Lorsqu’un utilisateur se connecte avec son identifiant et son mot de passe, un token lui est attribué avec et les boutons Sign in et Sign up disparaissent pour laisser place à un bouton de déconnexion.


### Librairies

Plusieurs librairies sont appellées, tout d'abord celles nécessaires au fonctionnement de Vue.js, nous avons aussi utilisés faker pour genérer des données aléatoires, 

### API utilisée

Le fonction fetch photo, dans la page Home.vue, nous permet de web-scrapper des images depuis le site Unplash.

### Utilisation

Pour lancer, utiliser la commande : npm run serve

Pour l’utilisation, il est préférable de lancer le site avec Google Chrome avec l'extension Moesif Origin & CORS Changer (https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related). En effet, sur des navigateurs tel que Brave ou Firefox, l’affichage des photos prises depuis Unplash ne fonctionne pas. Cela est du aau fait que l'on effectue une requête depuis une origine non identifié par le récepteur, qui n'accepte pas la requête.

Néanmoins sans l'extension chrome, les images ne s'affichent pas et laissent apparaitre des carrés noirs.

### Améliorations

Un des problèmes que nous avons relevé avec l'affichage de la page Home.vue est que l'affichage de la page principale est saccadé, et cela est dû aux promesses qui sont gènéré quand l'utilisateurs scroll et que l'image suivante est nécéssaire. Il aurait été plus optimisé d'utiliser une base de donnée mais moins intéressant d'un point de vue technique pour nous.

Une idée d'améliorations : crée une page avec un panier pour y ajouter des items.

## **Server** : avec node.js

### Description

Dans la partie server se trouve deux fichiers JavaScript : write-route et read-route, qui on pour but respectivement d’écrire sur la base de donnée JSON appelée users et de lire la base de donnée. 
On retrouve également des fichiers JavaScript tel que verify-token qui est le middleware, mais aussi auth-route qui est le script qui quand a lui attribue les token aux utilisateurs.

### Librairies

Bcrypt: Cette librairie nous permet de hasher les password avec un salt unique pour chaque mot de passe. La librairie bcrypt fourni également uns fonction booléenne pour vérifier un mot de passe correspond a un hash.

Jsonwebtoken : Librairie qui permet de gèrer et gènéré les JWT.

Fs : Cette librairie nous permet de lire et d'écrire sur des fichier JSON et donc de gèrer notre base de donnée qui est un fichier JSON.

### API utilisée


### Base de donnée

La base de donnée dans laquelle sont stocké les utilisateurs est un fichier JSON. Ou le username, propre à chaque utilisateur fait office de clé primaire.

### Utilisation

Pour lancer, utiliser la commande : npm run dev

## Ressources 
* Cours de developpement web ESILV https://esilv.stormier.ninja/
* Documentation officielle Vue.js https://vuejs.org/v2/examples/
* Bcrytp : https://www.npmjs.com/package/bcrypt
* Extension chrome ( qui permet aux images de s'afficher ) Moesif Origin & CORS Changer : https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related
