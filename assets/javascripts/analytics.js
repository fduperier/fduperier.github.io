/* Google Analytics events */
$(document).ready(function() {

  $(document)
    /** Personal **/
    .on('click', '.g1-social-icons .g1-social-icon--facebook', function() {
      ga('send', 'event', 'Social Networks', 'click', 'Facebook');
    })
    .on('click', '.g1-social-icons .g1-social-icon--instagram', function() {
      ga('send', 'event', 'Social Networks', 'click', 'Instagram');
    })
    .on('click', '.g1-social-icons .g1-social-icon--vimeo', function() {
      ga('send', 'event', 'Social Networks', 'click', 'Vimeo');
    })
    .on('click', '.g1-social-icons .g1-social-icon--youtube', function() {
      ga('send', 'event', 'Social Networks', 'click', 'Youtube');
    })

    /** Professional **/
    .on('click', '.g1-social-icons .g1-social-icon--twitter', function() {
      ga('send', 'event', 'Social Networks', 'click', 'Twitter');
    })
    .on('click', '.g1-social-icons .g1-social-icon--linkedin', function() {
      ga('send', 'event', 'Social Networks', 'click', 'LinkedIn');
    })
    .on('click', '.g1-social-icons .g1-social-icon--googleplus', function() {
      ga('send', 'event', 'Social Networks', 'click', 'Google+');
    })
    .on('click', '.g1-social-icons .g1-social-icon--aboutme', function() {
      ga('send', 'event', 'Social Networks', 'click', 'About.me');
    })
    .on('click', '.g1-social-icons .g1-social-icon--klout', function() {
      ga('send', 'event', 'Social Networks', 'click', 'Klout');
    })
  ;
});