carouselDemo.directive('carousel', function() {
    var directive = {
        restrict: 'E',
        controller: 'CarouselController',
        templateUrl: 'src/directives/carousel.html',
    };
    return directive;
});
