import angular from angular
import './node_modules/swiper/dist/js/swiper.js'
import './node_modules/swiper/dist/css/swiper.css'

const MODULE_NAME = 'ngSwiper'

import ngSwiper from './ng-swiper.directive'

angular.module(MODULE_NAME, [])
angular.module(MODULE_NAME).directive('ngSweaper', ngSwiper)
