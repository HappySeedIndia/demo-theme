(function ($, Drupal) {
  //Defines a new Drupal behavior named scrollToTop
  Drupal.behaviors.scrollToTop = {
    // This function is called when the behavior is attached.
    // Context is the DOM element where the behavior is being applied.
    attach: function (context, settings) {
      // Use the `once()` function to run the code only once per element.
      // Find the scroll-to-top button within the specified context.
      $(once('scrollToTop', '#back-to-top', context)).each(function () {
        var $button = $(this);

        // Show or hide the button based on the scroll position.
        $(window).on('scroll', function () {
          if ($(window).scrollTop() > 150) {
            $button.addClass('show');
          } else {
            $button.removeClass('show');
          }
        });

        // Scroll to the top when the button is clicked.
        $button.on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: 0 }, 500);
        });
      });
    }
  };
})(jQuery, Drupal);

