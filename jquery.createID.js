/**
 * jQuery createID plugin
 *
 * @version 1.0
 */
(function($) {

  /**
   * Plugin: Create a random ID for this element.
   */
  $.fn.createId = function() {
    return this.each(function() {
      var $this = $(this);
      if (!$this.attr('id')) {
        while (true) {
          var random = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
          if ($('#r' + random).length === 0) {
            $this.attr('id', 'r' + random);
            break;
          }
        }
      }
    });
  };

})(jQuery);
