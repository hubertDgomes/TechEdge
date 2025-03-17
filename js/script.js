new VenoBox({
    selector: '.my-video-links',
});

$('.sliders').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1
          }
        },
      ]
  });

  $('.sliderJS').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    infinite: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
        }
      },
      ]
    });

