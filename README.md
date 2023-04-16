App toujours non fonctionnelle:

Mon objectif étant de mieux comprendre la mise en place de formulaire via les modules, et faire apparaitre les taches crées sur la page d'accueil. Rien ne s'affiche lorsque on appui sur valider (redirection pahe accueil ok mais rien)

Erreur dans la console que je n'ai pas réussi à résoudre dans les méthodes concernées ci dessous:
ERROR RangeError: Maximum call stack size exceeded at TaskManagementService.createTask et TaskManagementService.getTask

Je pense avoir créé trop de components, les boutons actions en particulier: des soucis lors de l'appel de ces components dans leur pages attribuées, en leur ajoutant les parametres nécessaires (méthodes, paramètres, classes etc ..) ce qui a généré des conflits.
J'en suis revenu à coder le bouton directement dans la page pour éviter ces conflits (doublon)

la modification est en cours

l'historique n'est pas codé (prochain objectif)