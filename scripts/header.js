$('.first-ul').on('click', () => {
  if ($(window).width() < 1203) {
    $('.second-ul').toggleClass('show');
    $('#header-btn').toggleClass('huge-margin');
  }
});