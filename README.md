## [Faire remonter l'état](https://fr.reactjs.org/docs/lifting-state-up.html)

Assez souvent plusieurs composants ont besoin de refléter les mêmes données dynamiques. Il est conseillé de faire remonter l'état partagé dans leur ancêtre commun le plus proche. Nous allons voir comment cela fonctionne.

Lisons la documentation avant de passer à l'exercice (prenez 30 minutes et posez des questions)

### [Ce qu'il faut Retenir](https://fr.reactjs.org/docs/lifting-state-up.html#lessons-learned)

Il ne doit y avoir qu'une seule "*source de vérité*" pour toute donnée qui change dans une application React. L'état est d'abord ajouté au composant qui en a besoin pour s'afficher.

Ensuite, si d'autres composants en ont également besoin, nous pouvons faire remonter l'état dans l'ancêtre commun le plus proche. Nous ne synchroniserons pas les états de différents composants, on se basera sur des données qui se propagent [du haut vers le bas](https://fr.reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)

Faire remonter l'état implique une petite gymnastique mentale, qui nous force à écrire du code générique. Contrairement à des frameworks comme VueJs qui utilisent une liaison des données [bi-directionnelle](https://fr.vuejs.org/v2/guide/forms.html)

---

