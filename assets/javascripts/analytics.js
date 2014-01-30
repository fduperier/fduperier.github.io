(function() {
  "use strict";

  /* Google Analytics events */
  var ga = ga || [];

  var sendGAEvent = function(e) {
    ga('send', 'event', 'Social Networks', 'click', e.data.label);
  };

  $('a.btn').each(function(index) {
    /** Personal **/
    $(this).has('.fa-facebook').on('click', { label: "Facebook" }, sendGAEvent);
    $(this).has('.fa-instagram').on('click', { label: "Instagram" }, sendGAEvent);
    $(this).has('.fa-vimeo').on('click', { label: "Vimeo" }, sendGAEvent);
    $(this).has('.fa-youtube').on('click', { label: "Youtube" }, sendGAEvent);

    /** Professional **/
    $(this).has('.fa-twitter').on('click', { label: "Twitter" }, sendGAEvent);
    $(this).has('.fa-linkedin').on('click', { label: "LinkedIn" }, sendGAEvent);
    $(this).has('.fa-google-plus').on('click', { label: "Google+" }, sendGAEvent);
    $(this).has('.fa-about-me').on('click', { label: "About.me" }, sendGAEvent);
    $(this).has('.fa-klout').on('click', { label: "Klout" }, sendGAEvent);
  });

})();