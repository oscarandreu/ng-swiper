
class ngSwiperController {
    constructor($scope, $attrs, $timeout){

        this.$timeout = $timeout
        this.$id = $scope.$id

        this.DOMRendered = false
        this.dataLoaded = false
        this.container = null
        this.swiper = null

        // Swiper init
        this.onSlideChangeStart = $scope.onSlideChangeStart        
        this.elements = $scope.elements       
        this.centeredSlides = $scope.centeredSlides       
        this.speed = $scope.speed
        this.autoplay = $scope.autoplay
        this.autoplayDisableOnInteraction = $scope.autautoplayDisableOnInteractionoplay
        this.slidesPerView = $scope.slidesPerView
        this.paginationClickable = $scope.paginationClickable
        this.effect = $scope.effect
        this.onSlideChangeStart = $scope.onSlideChangeStart
        this.loop = $scope.loop

            
        $scope.$watch('elements', (value, old) => {
            this.dataLoaded = true
            if(this.DOMRendered){
                this.loadSlider()
            }
        })
        
        this.$timeout( () => {
            //DOM has finished rendering
            this.DOMRendered = true
            this.container = document.getElementById(`${this.$id}_sliderContainer`)

            if(this.dataLoaded){
                this.loadSlider()
            }

            if(this.onSlideChangeStart)
            	this.onSlideChangeStart()                
        })        
    }

    loadSlider(){        
        if(!this.elements || !this.container) return

        let wrapper = document.getElementById(`${this.$id}_sliderContainer`)
        for(let i = 0; i < this.elements.length; i++){
            wrapper.innerHTML += `<div class="swiper-slide"><div><img src="${this.elements[i].image}"/></div></div>`
        }

        this.swiper = new Swiper(`#${this.$id}_slider`, {
                nextButton: `#${this.$id}_buttonNext`,
                prevButton: `#${this.$id}_buttonPrev`,
                speed:  this.speed,
                centeredSlides: true,
                autoplay: 5000, //8000,
                autoplayDisableOnInteraction: true,
                slidesPerView: 1,
                paginationClickable: true,
                loop: true,
                effect: 'fade',
                onSlideChangeStart: this.onSlideChangeStart
            })
    }

    flush(container){
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
}

ngSwiperController.$inject = ['$scope', '$attrs', '$timeout']

export default ngSwiperController