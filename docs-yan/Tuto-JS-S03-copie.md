# Découverte du DOM, en JavaScript

Bienvenue dans le monde surpuissant du DOM.

Ce tuto est accompagné [d'une page](index.html) et de son [script.js](js/script.js) dans lequel vous pouvez tester tous les extraits de codes, tous fonctionnels, ci-dessous. Bonne découverte !

- [Découverte du DOM, en JavaScript](#découverte-du-dom-en-javascript)
  - [Accéder à n’importe quel élément d’une page web](#accéder-à-nimporte-quel-élément-dune-page-web)
    - [getElementById()](#getelementbyid)
    - [getElementsByClassName()](#getelementsbyclassname)
    - [getElementsByTagName()](#getelementsbytagname)
    - [querySelector()](#queryselector)
    - [querySelectorAll()](#queryselectorall)
    - [Est-ce qu’on peut chercher dans un élément (et non dans toute la page) ?](#est-ce-quon-peut-chercher-dans-un-élément-et-non-dans-toute-la-page-)
  - [Ajouter un nouvel élément dans une page](#ajouter-un-nouvel-élément-dans-une-page)
    - [createElement()](#createelement)
    - [prepend()](#prepend)
    - [append()](#append)
    - [before()](#before)
    - [after()](#after)
  - [Supprimer n’importe quel élément d’une page](#supprimer-nimporte-quel-élément-dune-page)
    - [remove()](#remove)
  - [Accéder/Ajouter/Modifier/Supprimer le contenu (texte ou HTML) d’un élément](#accéderajoutermodifiersupprimer-le-contenu-texte-ou-html-dun-élément)
    - [textContent](#textcontent)
    - [innerHTML](#innerhtml)
  - [Accéder/Ajouter/Modifier/Supprimer l’id d’un élément](#accéderajoutermodifiersupprimer-lid-dun-élément)
  - [Accéder/Ajouter/Modifier/Supprimer la source (src) d’un élément (image, vidéo, etc.)](#accéderajoutermodifiersupprimer-la-source-src-dun-élément-image-vidéo-etc)
  - [Accéder/Ajouter/Modifier/Supprimer n’importe quel attribut  d’un élément (image, vidéo, etc.)](#accéderajoutermodifiersupprimer-nimporte-quel-attribut--dun-élément-image-vidéo-etc)
  - [Accéder/Ajouter/Modifier/Supprimer la classe d’un élément](#accéderajoutermodifiersupprimer-la-classe-dun-élément)
    - [classList.contains()](#classlistcontains)
    - [classList.add()](#classlistadd)
    - [classList.remove()](#classlistremove)
    - [classList.toggle()](#classlisttoggle)
  - [Accéder/Ajouter/Modifier/Supprimer l’attribut de donnée d’un élément](#accéderajoutermodifiersupprimer-lattribut-de-donnée-dun-élément)
    - [dataset](#dataset)
  - [Credits](#credits)

## Accéder à n’importe quel élément d’une page web

Dans le monde du DOM, chaque balise (exemples:  `<body>`, `<h1>`, `<img>`, etc.) est un élément.

Et la première étape, c’est de bien savoir cibler (sélectionner) un élément dans une page web. Et pour cela, JavaScript nous offre plein de chouettes méthodes.

=> Via leur classe / selecteur css / balise /attribut /position ...

### getElementById()

Retourne un élément, par la valeur de son attribut id.

```js
// on souhaite sélectionner l'élément ayant l'id nav-item-1
const exemple1 = document.getElementById('nav-item-1');
console.log( exemple1 );
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### getElementsByClassName()

Retourne un tableau d'élément(s), par la valeur d'une classe.

```js
// on souhaite sélectionner les éléments ayant la classe titre
const exemple2 = document.getElementsByClassName('titre');
console.log(exemple2); // tableau indexé (HTMLCollection)
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### getElementsByTagName()

Retourne un tableau d'élément(s), par la valeur d'une balise.

```js
// on souhaite sélectionner les éléments ayant la balise div
const exemple3 = document.getElementsByTagName('div');
console.log(exemple3); // tableau indexé (HTMLCollection)
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### querySelector()

Véritable couteau suisse de la sélection d’élément, `querySelector` retourne un élément, en utilisant un sélecteur CSS standard.

```js
// on souhaite sélectionner l'élément ayant l'id nav-item-1
const exemple4 = document.querySelector('#nav-item-1');
console.log(exemple4);
```

```js
// on souhaite sélectionner le premier élément ayant la classe titre
const exemple5 = document.querySelector('.titre');
console.log(exemple5);
```

```js
// on souhaite sélectionner le premier élément ayant la balise div
const exemple6 = document.querySelector('div');
console.log(exemple6);
```

```js
// on souhaite sélectionner le premier élément ayant un attribut role valant button
const exemple7 = document.querySelector('[role="button"]');
console.log(exemple7);
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### querySelectorAll()

Autre couteau suisse, `querySelectorAll` retourne un tableau d’élément(s), en utilisant un sélecteur CSS standard.

```js
// on souhaite sélectionner tous les éléments ayant la balise paragraphe
const exemple8 = document.querySelectorAll('p');
console.log(exemple8);
```

```js
// on sélectionne toutes les balises div de la page web
const divElements = document.querySelectorAll('div');

// pour chacun de ces éléments ...
for (const element of divElements) {
  // on affiche chaque élément dans la console
  console.log( element );
}
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### Est-ce qu’on peut chercher dans un élément (et non dans toute la page) ?

Au lieu de chercher dans toute la page (`document`), on peut également chercher dans un élément.

```js
// on sélectionne l'élément main
const mainElement = document.querySelector('main');
// on sélectionne tous les éléments ul DANS ce main
const ulElements = mainElement.querySelectorAll('ul');
console.log(ulElements);
```

Voilà, c'était juste pour montrer une autre façon de faire, même si, techniquement, dans cet exemple, on serait arriver au même résultat en faisant :

```js
const ulElements = document.querySelectorAll('main ul');
console.log(ulElements);
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

## Ajouter un nouvel élément dans une page

Dans le monde du DOM, chaque balise est un élément. Après avoir vu comment sélectionner un élément, penchons-nous à présent sur l’art et la manière de créer de nouveaux éléments, uniquement à partir de code JavaScript.

### createElement()

Retourne un nouvel élément, du type désiré (exemples : `p`, `img`, `video`, `div`, etc.).

```js
// on créé un nouvel élément de type p
const paragraph = document.createElement('p');
```

```js
// on créé un nouvel élément de type div
const monPtiDiv = document.createElement('div');
```

```js
// on créé un nouvel élément de type img
const wallpaper = document.createElement('img');
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### prepend()

Ajoute un élément comme premier enfant d’un élément parent.

```js
// on créé un nouvel élément de type p
const paragraph = document.createElement('p');

// on sélectionne l'élément main de la page web
const main = document.querySelector('main');

// on ajoute notre nouvel élément
// comme premier enfant du main (qui devient son parent)
main.prepend(paragraph);
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### append()

Ajoute un élément comme dernier enfant d’un élément parent.

```js
// on créé un nouvel élément de type p
const paragraph = document.createElement('p');

// on sélectionne l'élément main de la page web
const main = document.querySelector('main');

// on ajoute notre nouvel élément
// comme dernier enfant du main (qui devient son parent)
main.append(paragraph);
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### before()

Ajoute un élément dans la page, juste avant un autre.

```js
// on créé un nouvel élément de type p
const paragraph = document.createElement('p');

// on sélectionne l'élément hgroup
const hgroup = document.querySelector('hgroup');

// on ajoute notre nouvel élément
// juste avant l'élément hgroup
hgroup.before(paragraph);
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### after()

Ajoute un élément dans la page, juste après un autre.

```js
// on créé un nouvel élément de type p
const paragraph = document.createElement('p');

// on sélectionne l'élément hgroup
const hgroup = document.querySelector('hgroup');

// on ajoute notre nouvel élément
// juste après l'élément hgroup
hgroup.after(paragraph);
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

## Supprimer n’importe quel élément d’une page

Il peut être utile de savoir comment supprimer un élément d’une page, à partir de JS.

### remove()

Supprime un élément du DOM.

```js
// on sélectionne l'élément details
const details = document.querySelector('details');

// on supprime cet élément
details.remove();
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

## Accéder/Ajouter/Modifier/Supprimer le contenu (texte ou HTML) d’un élément

### textContent

Retourne ou ajoute ou modifie le contenu textuel d’un élément.

Dans cet exemple, on stocke puis affiche le contenu textuel d’un élément :

```js
// on sélectionne l'élément h1
const h1 = document.querySelector('h1');

// on stocke le contenu textuel de cet élément
const h1Value = h1.textContent;

// on affiche dans la console cette valeur
console.log( h1Value );
```

Dans cet exemple, on réécrit le contenu textuel d’un élément :

```js
// on sélectionne l'élément h1
const h1 = document.querySelector('h1');

// on réécrit son contenu textuel
h1.textContent = "Le DOM";
```

Dans cet exemple, on ajoute le contenu textuel d’un élément :

```js
// on sélectionne l'élément h1
const h1 = document.querySelector('h1');

// on réécrit son contenu textuel
h1.textContent = "Le DOM";

// on modifie son contenu textuel
h1.textContent += " : c'est fascinant !";
```

Il est à noter qu’on ne peut pas ajouter du code HTML via `textContent`:

```js
// on créé un nouvel élément de type p
const paragraph = document.createElement('p');

// on lui donne un contenu textuel
paragraph.textContent = "Le cyberpunk est un genre de la science-fiction très apparenté à la dystopie. Source : <a href='https://fr.wikipedia.org/wiki/Cyberpunk'>Wikipédia</a>";

// on sélectionne l'élément main de la page web
const main = document.querySelector('main')

// on ajoute notre nouvel élément
// comme premier enfant du main
main.prepend(paragraph);
// avec textContent, le contenu HTML
// n'est pas interprété par le navigateur !
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### innerHTML

Retourne ou ajoute ou modifie le contenu HTML d’un élément.

Dans cet exemple, on stocke puis affiche le contenu HTML d’un élément :

```js
// on sélectionne le premier élément li de la page
const li = document.querySelector('li');

// on stocke le contenu HTML de cet élément
const liValue = li.innerHTML;

// on affiche dans la console cette valeur
console.log( liValue );
```

Dans cet exemple, on modifie le contenu HTML d’un élément :

```js
// on créé un nouvel élément de type p
const paragraph = document.createElement('p');

// on lui donne un contenu HTML
paragraph.innerHTML = "Le cyberpunk est un genre de la science-fiction très apparenté à la dystopie. Source : <a href='https://fr.wikipedia.org/wiki/Cyberpunk'>Wikipédia</a>";

// on sélectionne l'élément main de la page web
const main = document.querySelector('main')

// on ajoute notre nouvel élément
// comme premier enfant du main
main.prepend(paragraph);
// avec innerHTML, le contenu HTML
// est bien interprété par le navigateur
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

## Accéder/Ajouter/Modifier/Supprimer l’id d’un élément

Après avoir vu comment accéder, créer, modifier et supprimer un élément ou son contenu textuel ou HTML, nous nous penchons sur la façon dont on peut accéder à l’attribut `id` d’un élément.

Dans cet exemple, on stocke puis affiche l’attribut `id` d’un élément :

```js
// on sélectionne le premier élément img de la page web
const img = document.querySelector('img');

// on stocke la valeur de son id
const identification = img.id;

// alternative
// const identification = img.getAttribute('id');

// on affiche cette valeur dans la console
console.log( identification );
```

Dans cet exemple, on créé l’attribut `id` d’un élément :

```js
// on sélectionne l'élément h1 de la page web
const h1 = document.querySelector('h1');

// on lui créé un attribut id valant titre-super-important
h1.id = 'titre-super-important';

// alternative
// h1.setAttribute('id', 'titre-super-important');
```

Dans cet exemple, on réécrit l’attribut `id` d’un élément :

```js
// on sélectionne le premier élément img de la page web
const img = document.querySelector('img');

// on réécrit la valeur de son id
img.id = 'arbre-mystique';

// alternative
// img.setAttribute('id', 'arbre-mystique');
```

Dans cet exemple, on supprime l’attribut `id` d’un élément :

```js
// on sélectionne le premier élément img de la page web
const img = document.querySelector('img');

// on vide l'attribut id
img.id = '';

// alternative
img.removeAttribute('id');
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

## Accéder/Ajouter/Modifier/Supprimer la source (src) d’un élément (image, vidéo, etc.)

Voici maintenant différentes manières de gérer l’attribut `src` d’un élément.

Dans cet exemple, on stocke puis affiche l’attribut `src` d’un élément :

```js
// on sélectionne le premier élément img de la page web
const img = document.querySelector('img');

// on stocke la valeur de sa src (source)
const imgURL = img.src;

// alternative
// const imgURL = img.getAttribute('src');

// on affiche cette valeur dans la console
console.log( imgURL );
```

Dans cet exemple, on modifie l’attribut `src` d’un élément :

```js
// on sélectionne le premier élément img de la page web
const img = document.querySelector('img');

// on modifie la valeur de son attribut src
img.src = 'img/cyberpunk.jpg';
```

Dans cet exemple, on créé l’attribut `src` d’un élément :

```js
// on créé un nouvel élément de type img
const photo = document.createElement('img');

// on définit la valeur de son attribut src
photo.src = 'img/cyberpunk-2.jpg';

// on sélectionne l'élément hgroup
const hgroup = document.querySelector('hgroup');

// on ajoute l'image juste après le hgroup
hgroup.after(photo);
```

Dans cet exemple, on supprime l’attribut `src` d’un élément :

```js
// on sélectionne le premier élément img de la page web
const img = document.querySelector('img');

// on supprime la valeur de son attribut src
img.removeAttribute('src');
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

## Accéder/Ajouter/Modifier/Supprimer n’importe quel attribut  d’un élément (image, vidéo, etc.)

Voici finalement différentes manières de gérer n’importe quel attribut d’un élément.

Dans ces exemples, on stocke puis affiche un booléen, représentant la présence d’une classe :

```js
// on sélectionne l'élément summary
const summary = document.querySelector('summary');

// on stocke la présence d'un attribut role
const hasRole = summary.hasAttribute('role');

// on affiche dans la console cette valeur
console.log( hasRole ); // true
```

```js
// on sélectionne l'élément body
const body = document.querySelector('body');

// on stocke la présence d'un attribut title
const hasTitle = body.hasAttribute('title');

// on affiche dans la console cette valeur
console.log( hasTitle ); // false
```

Dans cet exemple, on stocke puis affiche la valeur d’un des attributs d’un élément :

```js
// on sélectionne le premier élément img de la page web
const img = document.querySelector('img');

// on stocke la valeur de son attribut alt
const description = img.getAttribute('alt');

// on affiche dans la console cette valeur
console.log( description );
```

Dans cet exemple, on créé un nouvel attribut :

```js
// on sélectionne l'élément h1
const h1 = document.querySelector('h1');

// on lui créé un attribut aria-busy valant true
h1.setAttribute('aria-busy', 'true');
```

Dans cet exemple, on créé de nouveaux attributs :

```js
// on créé un nouvel élément de type video
const scenery = document.createElement('video');

// on lui créé un attribut controls valant show
scenery.setAttribute('controls', 'show');

// on lui créé un attribut src valant video/night-city-4-am.mp4
scenery.setAttribute('src', 'video/night-city-4-am.mp4');

// on ajoute cette vidéo après l'élément hgroup
document.querySelector('hgroup').after(scenery);
```

Dans cet exemple, on modifie la valeur d’un attribut :

```js
// on sélectionne le premier élément img de la page web
const img = document.querySelector('img');

// on change la valeur de son attribut src
img.setAttribute('src', 'img/cyberpunk-3.jpg');
```

Dans cet exemple, on supprime un attribut :

```js
// on sélectionne l'élément summary
const summary = document.querySelector('summary');

// on lui supprime son attribut role
summary.removeAttribute('role');
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

## Accéder/Ajouter/Modifier/Supprimer la classe d’un élément

Pour clore notre découverte du DOM, voici quelques méthodes bien pratiques pour gérer les classes d’un élément.

### classList.contains()

Retourne si la classe spécifiée est présente dans la liste des classes attribuées à cet élément.

```js
// on sélectionne le premier élément a
const a = document.querySelector('a');

// on stocke la présence de la classe contrast
const hasContrast = a.classList.contains('contrast');

// on affiche cette valeur dans la console
console.log( hasContrast ); // true
```

```js
// on sélectionne le premier élément body
const body = document.querySelector('body');

// on stocke la présence de la classe incredible
const hasIncredible = body.classList.contains('incredible');

// on affiche cette valeur dans la console
console.log( hasIncredible ); // false
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### classList.add()

Ajoute la (les) classe(s) spécifiée(s) à un élément.

```js
// on sélectionne l'élément ayant l'id nav-item-1
const navItem1 = document.querySelector('#nav-item-1');

// on lui ajoute la classe secondary
navItem1.classList.add('secondary');
```

```js
// on sélectionne l'élément h1
const h1 = document.querySelector('h1');

// on lui ajoute les classes important, danger et warning
h1.classList.add('important', 'danger', 'warning');
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### classList.remove()

Retire la (les) classe(s) spécifiée(s) d’un élément.

```js
// on sélectionne l'élément ayant l'id nav-item-1
const navItem1 = document.querySelector('#nav-item-1');

// on lui retire la classe secondary
navItem1.classList.remove('secondary');
```

```js
// on sélectionne l'élément h1
const h1 = document.querySelector('h1');

// on lui retire les classes important, danger et warning
h1.classList.remove('important', 'danger', 'warning');
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

### classList.toggle()

Permute la classe spécifiée d’un élément.

```js
// on sélectionne le premier élément a
const a = document.querySelector('a');

// on lui permute la classe contrast
a.classList.toggle('contrast');
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

## Accéder/Ajouter/Modifier/Supprimer l’attribut de donnée d’un élément

Pour ouvrir de nouveaux horizons, voici quelques manières de gérer des attributs de données (exemples: `data-nom-de-la-variable`, `data-theme`, etc.) d’un élément. Les attributs de données sont des variables qui sont invisibles pour l’internaute, mais qui peuvent s’avérer très utiles pour les développeurs/ses désireux/ses de faire communiquer le HTML avec JS.

### dataset

La propriété `dataset` permet d'accéder, d'ajouter, de modifier ou de supprimer l'attribut de donnée d’un élément.

⚠️ Attention cependant au **nom** de l'attribut de donnée :

- Côté **HTML**, le nom est au format **kebab-case**, exemple : `data-nom-de-la-variable`
- Côté **JS**, le nom est au format **camelCase**, exemple : `element.dataset.nomDeLaVariable`

Dans cet exemple, on stocke puis affiche la valeur d’un attribut de donnée :

```js
// on sélectionne l'élément html
const html = document.querySelector('html');

// on récupère la valeur de son attribut de donnée theme
const currentTheme = html.dataset.theme;

// on affiche cette valeur
console.log( currentTheme ); // dark
```

Dans cet exemple, on modifie la valeur d’un attribut de donnée :

```js
// on sélectionne l'élément html
const html = document.querySelector('html');

// on modifie la valeur de son attribut de donnée theme
html.dataset.theme = 'light';
```

Dans cet exemple, on supprime un attribut de donnée :

```js
// on sélectionne l'élément html
const html = document.querySelector('html');

// on supprime la valeur de son attribut de donnée theme
html.dataset.theme = ''; // vide

// alternatives
html.removeAttribute('data-theme'); // alternative 1
delete html.dataset.theme; // alternative 2
```

[Retour au sommaire](#découverte-du-dom-en-javascript)

## Credits

- Ce tuto a été conçu avec moult joie par [Jérémie Canavesio](https://humanize.me/now.html).
- Framework [Pico CSS](https://picocss.com/) par Lucas Larroche (license MIT).
- Images générées par AI et référencées sur [Krea.ai](https://www.krea.ai/) ([GitHub](https://github.com/krea-ai/open-prompts)).
- Photo "Blade Runner Blues, Tokyo" (c) [Liam Wong](https://www.liamwong.com/).
- Vidéo extraite de "50 Minutes of Walking in Night City at 4 am ASMR Cyberpunk 2077", par [PravoEffect](https://www.youtube.com/watch?v=b6L40CEYVyM).

[Retour au sommaire](#découverte-du-dom-en-javascript)