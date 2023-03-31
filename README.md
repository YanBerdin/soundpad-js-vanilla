# o'soundboard

Depuis notre plus tendre enfance, on adore appuyer sur des boutons pour faire des bruits.

Ici chaque bouton ne s'appelle pas "un bouton" mais "un pad". Mais ça revient au même: quand on appuie dessus, ça doit faire du bruit!

## Objectifs pédagogiques

- utiliser le DOM
- créer des écouteurs d'évènements

## Étapes

Chaque étape (1, 2, 3, etc.) est à retrouver dans le code source, sous la forme de "TODO" (`TODO 1`, `TODO 2`, `TODO 3`, etc.)

1. `TODO 1` pour initialiser l'application, créer un écouteur d'évènement qui exécute la méthode app.init, lorsque le DOM est prêt.
2. `TODO 2` pour lier les propriétés à des éléments du DOM, à l'aide de [querySelector](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector), rattacher chacune des propriétés suivantes à son élément du DOM correspondant :
   - `soundboard.kickElement`
   - `soundboard.hihatElement`
   - `soundboard.snareElement`
   - `soundboard.wobbleElement`
   - `soundboard.vocalElement`
   - `soundboard.scratchElement`
3. `TODO 3` pour déclencher la lecture d'un son spécifique, lorsque l'on click sur un "pad", créer un écouteur d'évènement par élément "pad". Chaque écouteur d'évènement doit écouter le "click" et exécuter le handler correspondant. Exemple: pour l'élément `soundboard.kickElement`, l'écouteur d'évènement sur le "click" exécutera `soundboard.handleKickClick`.

## Pour aller plus loin

### 1. Piloter les pads, à partir du clavier

Pour pouvoir piloter également les pads à partir du clavier, ajouter le handler ci-dessous dans l'objet `soundboard`.
<details>
<summary>code source du handler <code>handleKeyboard</code></summary>

```js
/**
  * Méthode/Handler exécuté lorsque n'importe quelle touche du clavier est pressée
  */
handleKeyboard: function(event) {
  if (event.key === 'a') { soundboard.kickElement.click(); }
  if (event.key === 'z') { soundboard.hihatElement.click(); }
  if (event.key === 'e') { soundboard.snareElement.click(); }
  if (event.key === 'q') { soundboard.wobbleElement.click(); }
  if (event.key === 's') { soundboard.vocalElement.click(); }
  if (event.key === 'd') { soundboard.scratchElement.click(); }
},
```
</details>

Puis, dans la méthode `attachEvents`, créer un écouteur d'évènement global, via `document.addEventListener` qui écoutera l'évènement de type `"keydown"` et qui exécutera la nouvelle méthode `soundboard.handleKeyboard`

### 2. Changer la couleur des pads (même lorsqu'on les joue à partir du clavier)

- Lorsque les pads sont cliqués, ils changent de couleur
- Mais lorsqu'ils sont joués depuis les touches du clavier, ils ne changent pas de couleur

On aimerait qu'ils changent de couleur, également lorsqu'ils sont joués depuis les touches du clavier.

À vous de développer cette fonctionnalité.

## Ressources

- [querySelector](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector) (MDN)
- [querySelectorAll](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll) (MDN)
- [addEventListener](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener) (MDN)
- [DOMContentLoaded](https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event) (MDN)