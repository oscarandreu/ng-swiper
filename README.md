# Angular-Swiper-Directive
Angular 1 directive to make easy the use of [swiper](http://idangero.us/swiper).  
This small npm package was created motivate for the problems using directly swiper with ng-repeat as can be found in stackoverflow.

You can see a working example on Plunker: [Plunker example](https://embed.plnkr.co/O1sl0XZTeHlFVbZLHAWm/)

## Requirements   
Angularjs v1.3+

## Installation  
npm install ng-swiper --save

## How to use it 
The directive can be used like this:

~~~~
var app = angular.module('ngSwiperExample', ['ngSwiper']);
~~~~

Then add something like this in your controller:
 ~~~~
$scope.slides = [
        {image : "https://raw.githubusercontent.com/oscarandreu/ng-swiper/master/examples/example_1/img/slider1.jpg"},
        {image : "https://raw.githubusercontent.com/oscarandreu/ng-swiper/master/examples/example_1/img/slider2.jpg"}
    ]   
~~~~

And use the directive in your view:
~~~~
<ng-swiper 
    elements="slides"
    on-slide-change-start ="slideChange"
    speed: "1000",
    centeredSlides: "true",
    autoplay: "5000",
    autoplayDisableOnInteraction: "true",
    slidesPerView: "1",
    paginationClickable: "true",
    effect: "fade",
    loop: 'true'
    >
</ng-swiper>
~~~~

## Use examples  
In the examples folder you can find several examples  
### example_1:  
Ready to go simple use example.  
### example_2:  
Webpack 2 / ES6 example than can be checked using nodejs executing the next commands.
 - npm install  
 - npm run web  
This last command will launch the Webpack dev server in http://localhost:8080