var app = angular.module('ngSwiperExample', ['ngSwiper']);

app.controller('MainCtrl', function($scope) {
    $scope.slides = [
        {image : "https://raw.githubusercontent.com/oscarandreu/ng-swiper/master/example_webpack/img/slider1.jpg"},
        {image : "https://raw.githubusercontent.com/oscarandreu/ng-swiper/master/example_webpack/img/slider2.jpg"}
    ]     

    $scope.slideChange = (swiper) => {
        let index = swiper ? swiper.realIndex :0
        console.log('slide: ${index}')
    }
});
