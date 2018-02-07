$(document).ready(function () {
  $('#0 > .tab').addClass('active-tab');
  $('#1 > .tab').addClass('hide-left');
  $('#0 > .content').addClass('active-content');
});

$('.tab').on('click', function () {
  $('.tab').removeClass('active-tab hide-right hide-left');
  $(this).addClass('active-tab');

  $('.content').removeClass('active-content');

  $(this).siblings('.content').addClass('active-content');

  let num = $(this).parent().attr('id');
  let leftTab = (parseInt(num) - 1).toString();
  let rightTab = (parseInt(num) + 1).toString();

  $(`#${leftTab} > .tab`).addClass('hide-right');
  $(`#${rightTab} > .tab`).addClass('hide-left');
});