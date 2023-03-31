const app = {

  /**
   * Méthode permettant d'initialiser l'application
   * et de démarrer les composants nécessaires
   */
  init: function() {
    console.log('app.init');
    soundboard.init();
  },

}

/**
 * Écouteur d'évènement qui exécute la méthode app.init
 * lorsque le DOM est prêt
 */
// TODO 1