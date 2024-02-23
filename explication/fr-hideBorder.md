<img src="https://raw.githubusercontent.com/DictateurMiro/NameMC-Boost/Chrome/demo/skinart_viewer.gif">

Pour réaliser le hideBorder (exemple ci-dessus) il a fallut récuppérer toutes les 'div' pour ensuite regarder qui a la largeur qui est égal à 324px qui a aussi une margin en auto et aussi un textAlign en center ce qui sera toujours dans notre cas l'endroit ou sont stocké l'historique des skin du joueur. Une fois la div trouvé il faut passer la largeur de 324px à 300px, pour que le skin art soit bien affiché.

Ensuite il récuppère tout les éléments qui ont pour class 'skin-2d' pour changer la border radius à 0%

Puis pour finir il récuppère tout les éléments qui ont pour class 'skin-button' et change la margin à 0 

## Affichage sur le profil

Le programme va trouver ".card-header" et ".py-1" ensuite il va chercher si le mot "Skin" dans plusieur language existe si ce n'est pas le cas il continue de chercher et des qu'il trouve il va afficher une parenthèse dans un span puis juste après il va afficher la balise pour un lien qui contiendra "javascript:void(0);" ce qui permet de ne pas faire bouger la page si ce texte n'est pas la en cliquant sur le lien la page remonte toutes seul et apres on remet une parenthèse dans un span

On met listener qui attends un click et quand l'utilisateur va cliquer la fonction toggleBorder() va être appellé
