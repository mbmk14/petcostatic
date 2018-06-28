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
    $('.nav-link.has-subnav').on('click', function () {
      $(this).toggleClass('active').next().collapse('toggle');
    }),

    $('#shop-by-pet-dog').on('mouseover', function () {
      $(this).addClass('active').siblings('li').removeClass('active');
      $('#shop-by-pet-dog-list').addClass('active').closest('.subnav-lavel-1').find('> .nav-item > .collapse').removeClass('active');
    }),

    $('#shop-by-pet-cat').on('mouseover', function () {
      $(this).addClass('active').siblings('li').removeClass('active');
      $('#shop-by-pet-cat-list').addClass('active').closest('.subnav-lavel-1').find('> .nav-item > .collapse').removeClass('active');
    })
  )

})
