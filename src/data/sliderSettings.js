// data/sliderSettings.js
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,  // Enable automatic sliding
  autoplaySpeed: 4000,  // Speed at which slides move (in ms)
  responsive: [
    {
      breakpoint: 1024,  // For tablets and larger
      settings: {
        slidesToShow: 2,  // Show 2 tiles at a time
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,  // For small devices
      settings: {
        slidesToShow: 1,  // Show 1 tile at a time
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};
  
  export default settings;
  