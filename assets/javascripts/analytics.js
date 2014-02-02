'use strict';

/* Google Analytics events */
var ga = ga || [];

var sendGAEvent = function(e) {
  ga('send', 'event', e.data.category, 'click', e.data.label);
};

$('#social-networks-links a.btn').each(function() {
  /** Personal **/
  $(this).has('.fa-facebook').on('click', { category: 'Social Networks', label: 'Facebook' }, sendGAEvent);
  $(this).has('.fa-instagram').on('click', { category: 'Social Networks', label: 'Instagram' }, sendGAEvent);
  $(this).has('.fa-vimeo').on('click', { category: 'Social Networks', label: 'Vimeo' }, sendGAEvent);
  $(this).has('.fa-youtube').on('click', { category: 'Social Networks', label: 'Youtube' }, sendGAEvent);

  /** Professional **/
  $(this).has('.fa-twitter').on('click', { category: 'Social Networks', label: 'Twitter' }, sendGAEvent);
  $(this).has('.fa-linkedin').on('click', { category: 'Social Networks', label: 'LinkedIn' }, sendGAEvent);
  $(this).has('.fa-google-plus').on('click', { category: 'Social Networks', label: 'Google+' }, sendGAEvent);
  $(this).has('.fa-about-me').on('click', { category: 'Social Networks', label: 'About.me' }, sendGAEvent);
  $(this).has('.fa-klout').on('click', { category: 'Social Networks', label: 'Klout' }, sendGAEvent);
  $(this).has('.fa-codeschool').on('click', { category: 'Social Networks', label: 'CodeSchool' }, sendGAEvent);
  $(this).has('.fa-slideshare').on('click', { category: 'Social Networks', label: 'Slideshare' }, sendGAEvent);
});

$('#personal-website-links a.btn').each(function() {
  $(this).has('.fa-globe').on('click', { category: 'Personal Website', label: 'Home' }, sendGAEvent);
  $(this).has('.fa-rocket').on('click', { category: 'Personal Website', label: 'Projets' }, sendGAEvent);
  $(this).has('.fa-rss-square').on('click', { category: 'Personal Website', label: 'Blog' }, sendGAEvent);
  $(this).has('.fa-user').on('click', { category: 'Personal Website', label: 'CV' }, sendGAEvent);
});
