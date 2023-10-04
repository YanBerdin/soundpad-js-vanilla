const soundboard = {

  /**
   * Propriétés liées au DOM
   * les valeurs appropriées seront données par la méthode "definePads"
   */
  kickElement: null,
  hihatElement: null,
  snareElement: null,
  wobbleElement: null,
  vocalElement: null,
  scratchElement: null,
  
  /**
   * Propriétés liées à l'Audio
   * les valeurs appropriées seront données par la la méthode "preloadSamples"
   */
  kickAudio: null,
  hihatAudio: null,
  snareAudio: null,
  wobbleAudio: null,
  vocalAudio: null,
  scratchAudio: null,

  /**
   * Méthode permettant d'initialiser la sound board
   */
  init: function() {
    console.log('soundboard.init');
    soundboard.definePads(); // remplit les 6 premières propriétés
    soundboard.preloadSamples(); // remplit les 6 dernières propriétés
    soundboard.attachEvents(); //attache les écouteurs d'événements sur les 6 boutons
  },

  /**
   * Méthode permettant de sélectionner dans le DOM
   * les différents éléments pads
   */
  definePads: function() {
    // TODO 2
    soundboard.kickElement = document.querySelector(".pad-1");
    soundboard.hihatElement = document.querySelector(".pad-2");
    soundboard.snareElement = document.querySelector('.pad-3');
    soundboard.wobbleElement = document.querySelector('.pad-4');
    soundboard.vocalElement = document.querySelector('.pad-5');
    soundboard.scratchElement = document.querySelector('.pad-6');
  },

  /**
   * Méthode permettant d'initialiser et de précharger
   * les différents samples audio à jouer
   */
  preloadSamples: function() {
    soundboard.kickAudio = new Audio('assets/audio/kick.opus');
    soundboard.hihatAudio = new Audio('assets/audio/hihat.opus');
    soundboard.snareAudio = new Audio('assets/audio/snare.opus');
    soundboard.wobbleAudio = new Audio('assets/audio/wobble.opus');
    soundboard.vocalAudio = new Audio('assets/audio/voice.opus');
    soundboard.scratchAudio = new Audio('assets/audio/scratch.opus');

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
    // + https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "kick" est pressé
   */
  handleKickClick: function() {
    soundboard.kickAudio.currentTime = 0;
    soundboard.kickAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "hi-hat" est appuyé
   */
  handleHihatClick: function() {
    soundboard.hihatAudio.currentTime = 0;
    soundboard.hihatAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "snare" est appuyé
   */
  handleSnareClick: function() {
    soundboard.snareAudio.currentTime = 0;
    soundboard.snareAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "wobble" est appuyé
   */
  handleWobbleClick: function() {
    soundboard.wobbleAudio.currentTime = 0;
    soundboard.wobbleAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "vocal" est appuyé
   */
  handleFxClick: function() {
    soundboard.vocalAudio.currentTime = 0;
    soundboard.vocalAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "scratch" est appuyé
   */
  handleScratchClick: function() {
    soundboard.scratchAudio.currentTime = 0;
    soundboard.scratchAudio.play();
  },

  /**
   * Méthode permettant d'ajouter un écouteur d'évènement par pad
   */
  attachEvents: function() {
    // TODO 3
    // Je veux rattacher la méthode handleKickClick à l'écouteur d'événement click qui sera rattaché à mon bouton kick
    // - Je prends mon bouton kick, qui est stocké dans la propriété kickElement de Soundboard
    // - J'utilise addEventListener pour créer un écouteur d'événement click sur le bouton
    // - je dis qu'à chaque click sur le bouton, devra s'exécuter la méthode handleKickClick
    soundboard.kickElement.addEventListener('click', soundboard.handleKickClick);
    soundboard.hihatElement.addEventListener('click', soundboard.handleHihatClick);
    soundboard.snareElement.addEventListener('click', soundboard.handleSnareClick);
    soundboard.wobbleElement.addEventListener('click', soundboard.handleWobbleClick);
    soundboard.vocalElement.addEventListener('click', soundboard.handleFxClick);
    soundboard.scratchElement.addEventListener('click', soundboard.handleScratchClick);

    // Pour écouter quand on appuie sur les touches du clavier, il faut se repositionner sur tout le document !!
    document.addEventListener('keydown',soundboard.handleKeyBoard);
    document.addEventListener('keyup', soundboard.handleKeyUp);
  },

  handleKeyBoard: function(event) {
    // on a besoin de récupérer l'objet "événement courant" dans la variable event
    // car on ne sait pas quelle touche a été enfoncée
    console.log(event.key);
    // si je presse la touche "a"...
    if (event.key === "a") {
      soundboard.kickElement.click(); // je simule un click sur le bouton kick, qui va exécuter le handleKickClick
      soundboard.kickElement.classList.add('active'); // quand la touche est enfoncée, on attribue une classe css au bouton
    }
    if (event.key === 'z') {
      soundboard.hihatElement.click();
    }
  },


  handleKeyUp: function(event) {
    if (event.key === "a") {
      soundboard.kickElement.classList.remove('active'); // retire la classe css quand on libère la touche du clavier
    }
  }


}