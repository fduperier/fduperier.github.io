/* Google Analytics events */
$(document).ready(function() {

  /** Personal **/
  $(document).on('click', '.g1-social-icons .g1-social-icon--facebook', function() {
    ga('send', 'event', 'Social Networks', 'click', 'Facebook');
  });
  $(document).on('click', '.g1-social-icons .g1-social-icon--instagram', function() {
    ga('send', 'event', 'Social Networks', 'click', 'Instagram');
  });
  $(document).on('click', '.g1-social-icons .g1-social-icon--vimeo', function() {
    ga('send', 'event', 'Social Networks', 'click', 'Vimeo');
  });
  $(document).on('click', '.g1-social-icons .g1-social-icon--youtube', function() {
    ga('send', 'event', 'Social Networks', 'click', 'Youtube');
  });

  /** Professional **/
  $(document).on('click', '.g1-social-icons .g1-social-icon--twitter', function() {
    ga('send', 'event', 'Social Networks', 'click', 'Twitter');
  });
  $(document).on('click', '.g1-social-icons .g1-social-icon--linkedin', function() {
    ga('send', 'event', 'Social Networks', 'click', 'LinkedIn');
  });
  $(document).on('click', '.g1-social-icons .g1-social-icon--googleplus', function() {
    ga('send', 'event', 'Social Networks', 'click', 'Google+');
  });
  $(document).on('click', '.g1-social-icons .g1-social-icon--aboutme', function() {
    ga('send', 'event', 'Social Networks', 'click', 'About.me');
  });
  $(document).on('click', '.g1-social-icons .g1-social-icon--klout', function() {
    ga('send', 'event', 'Social Networks', 'click', 'Klout');
  });

});