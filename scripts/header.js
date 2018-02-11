$('.first-ul').on('click', () => {
  if ($(window).width() < 1203) {
    $('.second-ul').toggle();
    $('#header-btn').toggleClass('huge-margin');
  }
});