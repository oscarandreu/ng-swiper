require('angular')

import '../node_modules/swiper/dist/js/swiper.js'
import '../node_modules/swiper/dist/css/swiper.css'

const MODULE_NAME = 'ngSwiper'

import ngSwiperDirective from './ng-swiper.directive.js'

angular.module(MODULE_NAME, [])
angular.module(MODULE_NAME).directive(MODULE_NAME, ngSwiperDirective)
