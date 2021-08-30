   $('.slider__inner').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-next.svg" alt=""></button>',
      responsive: [{
            breakpoint: 1024,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });

   $('.menu-btn,.menu__item-link').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
      $('.menu-btn').toggleClass('active');
   });


   $(".menu a , .footer-copy a").on("click", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),

         //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });
   AOS.init();