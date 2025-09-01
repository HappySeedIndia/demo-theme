/**
 * @file
 * Mytheme button behavior.
 */

(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.mythemeButtonAlert = {
    attach: function (context) {
      const buttons = once('mytheme-button-alert', 'button.js-mytheme-button', context);

      buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
          alert("You clicked a button!");
        });
      });
    }
  };
})(Drupal, once);