import $ from 'jquery';
$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').addClass('open')
  });

  $('.offcanvas-collapse-close').on('click', function () {
    $('.offcanvas-collapse').removeClass('open')
  });

  let windowWidth = $(document).innerWidth();

  if(windowWidth < 992) (
    $('.nav-link.top-level').on('click', function () {
      $(this).toggleClass('active').next().toggleClass('open')
    })
  )

})
