class mainController {
    constructor($scope){

        $scope.slides = [
                {image : "https://raw.githubusercontent.com/oscarandreu/ng-swiper/master/examples/example_2/img/slider1.jpg"},
                {image : "https://raw.githubusercontent.com/oscarandreu/ng-swiper/master/examples/example_2/img/slider2.jpg"}
            ]   

        $scope.slideChange = (swiper) => {
            let index = swiper ? swiper.realIndex :0
            console.log('slide: ${index}')
        }
    }
}

mainController.$inject = ['$scope']

export default mainController
