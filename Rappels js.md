# Révisions JS

## Les variables
> Notions : let, const, camelCase

[Mdn : let](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let)


```js
let maVariable = "quelque chose";
maVariable = 12;
```
[Mdn : const](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/const)
```js
const maConstante = "Une valeur fixe";
```

### Les types
> Notions : int, float, string, bool

[Mdn : Types et structures de données](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures)

```js
let valeur;
console.log(valeur);    // undefined
valeur = null;
valeur = 12;
valeur = 42.12;
valeur = "quarante deux";
valeur = false;
```

## Les tableaux
> Notions : index, clé

### Tableau indexé
> Notions : déclaration, manipulation, lecture

[Mdn : Tableau](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)

```js
let monTableau = ["abc", "def"];
monTableau.push("ghi");

let valeurDeux = monTableau[1];
```

### Tableau associatif (objets)
> Notions : déclaration, manipulation, lecture

[Mdn : Utiliser les objets](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_Objects#indexing_object_properties)

```js
let monTabAsso = {
    cle: "valeur",
    autrecle: 42
};
monTabAsso.encorecle = true;

la valeurCle = monTabAsso.cle;
```


## Les boucles
> for, for of, for in

[Mdn : for](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for)

[Mdn : les autres boucles](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for#voir_aussi)

### for
> Exécute une série d'instructions plusieurs fois

```js
for (let i = 0; i < 42; i++) {
    console.log(i);
}
```


### for of
> Parcours le tableau et fournit l'élément à chaque itération, ne fonctionne pas avec un tableau associatif

```js
let monTableau = ["abc", "def", "ghi"];
let monTabAsso = {
    cle: "valeur",
    autrecle: 42,
    encorecle: false
};

for (const element of monTableau) {
  console.log(element);     // Affichera "abc", puis "def", puis "ghi"
}
```

### for in
> Parcours le tableau et fournit l'index à chaque itération, ou la clé pour un objet

```js
let monTableau = ["abc", "def", "ghi"];
let monTabAsso = {
    cle: "valeur",
    autrecle: 42,
    encorecle: false
};

for (const index in monTableau) {
  console.log(index);                   // Affichera 0, puis, 1, puis 2
  console.log(monTableau[index]);       // Affichera "abc", puis "def", puis "ghi"
}

for (const property in monTabAsso) {
  console.log(property);                   // Affichera cle, puis autrecle, puis encorecle
  console.log(monTabAsso[property]);       // Affichera "valeur", puis 42, puis false
}
```


## Les fonctions
> Notions : déclaration, arguments, retour, appel

[Mdn : les fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function)

```js
function maFonction(argument1, argument2) {
    const resultat = argument1 + argument2;
    return resultat;
}

const valeur = maFonction(2, 65);
```


## Les conditions
> Notions : utilisation, opérateurs

[Mdn : Prendre des décisions dans le code](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/conditionals)

```js
let valeur = 12;

if ( valeur < 5 ) {
    console.log("valeur est inférieur à 5");
}
else if ( valeur < 10 ) {
    console.log("valeur est inférieur à 10 et supérieur à 5");
}
else {
    console.log("valeur est supérieur ou égal à 10");
}
```

### Opérateurs logiques
```js
if ( valeur === 12 ) {
    console.log("valeur est strictement égal à 12 (valeur et type)");
}
if ( valeur !== 12 ) {
    console.log("valeur est strictement différent de 12 (valeur et type)");
}

if ( valeur != "12" ) {
    console.log("valeur est différent 12 (valeur uniquement)");
}

if ( valeur >= 12 ) {
    console.log("valeur est supérieur ou égal à 12");
}
```

### Opérateurs de comparaison
```js
if ( valeur === 12 || valeur === true ) {
    console.log("valeur est égal à 12 OU est vrai");
}
```

```js
if ( valeur < 5 && valeur > 10 ) {
    console.log("valeur est inférieur à 5 et supérieur à 10");
}
```

```js
if ( !valeur ) {
    console.log("valeur n'est pas vrai");
}
```


## Le DOM
> Notions : sélection d'un élément HTML, manipulation, intéractions, création

### Sélection

[Mdn : Manipuler des documents](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

```html
<main>
    <h1 id="id-du-noeud">Titre</h1>

    <div class="class-de-noeuds">1</div>
    <div class="class-de-noeuds">2</div>
    <div class="class-de-noeuds">3</div>
    <div class="class-de-noeuds">4</div>
</main>
```


```js
// Récupère un noeud avec son id
let node1 = document.getElementById("id-du-noeud");

// Récupère le premier noeud qui correspond au sélecteur css
let node2 = document.querySelector('div.class-de-noeuds')

// Récupère plusieurs noeuds avec la classe
let nodesList1 = document.getElementsByClassName("class-de-noeuds");

// Récupère tous les noeuds qui correspondent au sélecteur css
let nodesList2 = document.querySelectorAll("div.class-de-noeuds");
```

### Manipulation

```js
let node1 = document.getElementById("id-du-noeud");

// Modifie l'id
node1.id = "autre-id";

// Ajoute une classe
node1.classList.add('class-title');
// Supprime une classe
node1.classList.remove('class-title');
// Bascule une classe (ajoute ou supprime)
node1.classList.add('class-title');

// Redéfini le contenu
node1.textContent = "Nouveau titre";

// Ajoute un attribut
node1.setAttribute('role', 'presentation');
// Supprime un attribut
node1.removeAttribute('role');

// Suppression de l'élément du DOM
node1.remove();
```

### Intéractions 
```html
<button id="go">GO</button>
```

```js
// Fonction de callback appelée lors d'un click
// JS fournit automatiquement un argument, on le nomme comme on veux, ici `event`
function handleButtonClick (event) {
    console.log(event);

    // Pour récupérer le bouton cliqué depuis l'argument event
    const btn = event.currentTarget;

    // Modification du texte du bouton après le click
    btn.textContent = "Gone";
}

// Récupération du bouton et branchement de l'event click
const btnGo = document.getElementById("go");
btnGo.addEventListener('click', handleButtonClick);
```

### Création
```html
<div class="container"> 
    <!-- <span class="span-class">Texte du span</span> -->

</div>
```

```js
// Création d'un élément de toute pièce
const newElt = document.createElement('span');
newElt.classList.add('span-class')
newElt.textContent = "Texte du span";

// Récupération du container
const ctn = document.querySelector('.container');
// Ajout de l'élément au container
ctn.append(newElt);
```


## Modules (presque POO)
> Notions : déclaration, utilisation

[Mdn : Les bases de JavaScript, orienté objet](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Basics)

```js
// Déclaration du module
const MonModule = {

    // Propriétés (comme en PHP)
    container: null,

    // Méthode d'initialisation (un genre de constructeur comme en PHP)
    init: function () {
        // Accès à la propriété du module en écriture
        MonModule.container = document.querySelector('#container');

        // Accès à la propriété du module en lecture
        console.log(MonModule.container);

        // Appel d'une méthode interne
        const result = MomModule.maMethode(1,5);
    },

    // Méthode (comme en PHP)
    maMethode: function (arg1, arg2) {
        return arg1 + arg2;
    }
}

// Branchement de la méthode d'initialisation du module à la fenêtre
// DOMContentLoaded est appelé quand le DOM est entièrement chargé et analysé
window.addEventListener("DOMContentLoaded", MonModule.init);
```
