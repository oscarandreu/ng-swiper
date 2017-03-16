import 'angular'
import 'angular-route'
import 'ng-swiper'

import exampleController from './exampleController'

var mainApp = angular.module('mainApp', ['ngRoute', 'ngSwiper'])
angular.module('mainApp').controller('exampleController', exampleController)

 mainApp.config(['$routeProvider', function( $routeProvider ) {            
    $routeProvider.when('/', {templateUrl: './exampleView.html', controller: 'exampleController'})
}])
