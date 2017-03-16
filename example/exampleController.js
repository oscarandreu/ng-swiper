class mainController {
    constructor($scope){

        $scope.slides = [
            {
                image : "/img/slider1.jpg"
            }
            ,{
                image : "/img/slider2.jpg"
            }
        ]     

        $scope.slideChange = (swiper) => {
            let index = swiper ? swiper.realIndex :0
            console.log('slide: ${index}')
        }
    }
}

mainController.$inject = ['$scope']

export default mainController
