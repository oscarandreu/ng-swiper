# Angular-Swiper-Directive
Angular 1 directive to make easy the use of [swiper](http://idangero.us/swiper).

This small npm package was created motivate for the problems using directly swiper with ng-repeat as can be found in stackoverflow.
In the package there is a simple example using webpack than can be checked using nodejs executing the next commands.
 - npm install
 - npm run web

This last command will launch the Webpack dev server in http://localhost:8080

##Requirements   
Angularjs v1.3+

##Installation  
npm install ng-swiper --save

## How to use it 
The directive can be used like this:
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

And usig something like this in your controller
 ~~~~
 $scope.slides = [
            {
                image : "/img/slider1.jpg"
            }
            ,{
                image : "/img/slider2.jpg"
            }
        ]   
~~~~