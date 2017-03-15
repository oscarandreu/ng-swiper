
import controller from './ngSwiperController.controller'
import templateUrl from './ngSwiperController.html'

function SliderDirective() {
    return{
        restrict: 'E',
        controller: controller,
        transclude: true,
        replace: true,
        scope: {
            elements: '=',
            speed: '@',
            centeredSlides: '@',
            autoplay: '@',
            autoplayDisableOnInteraction: '@',
            slidesPerView: '@',
            paginationClickable: '@',
            effect: '@',
            onSlideChangeStart: '=',
            loop: '@'
        },
        templateUrl: templateUrl
    }

}

//SliderDirective.$inject = ['qsCommon', 'qcEvents', '$filter']

export default SliderDirective