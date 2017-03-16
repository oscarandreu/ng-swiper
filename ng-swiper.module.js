require('angular')

import '../swiper/dist/js/swiper.js'
import '../swiper/dist/css/swiper.css'

const MODULE_NAME = 'ngSwiper'

import ngSwiperDirective from './ng-swiper.directive.js'

angular.module(MODULE_NAME, [])
angular.module(MODULE_NAME).directive('ngSweaper', ngSwiperDirective)
