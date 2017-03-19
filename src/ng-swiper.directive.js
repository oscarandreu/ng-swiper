
import controller from './ng-swiper.controller.js'

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
        template: 
        `<div class="swiper-container" id="{{::$id}}_slider">
			<div class="swiper-wrapper"  id="{{::$id}}_sliderContainer"></div>
			<div id="{{::$id}}_buttonPrev" class="swiper-button-prev"></div>
			<div id="{{::$id}}_buttonNext" class="swiper-button-next"></div>   
		</div>`
    }

}

//SliderDirective.$inject = ['qsCommon', 'qcEvents', '$filter']

export default SliderDirective