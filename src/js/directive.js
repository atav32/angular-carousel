carouselDemo.directive('carousel', function() {
    var directive = {
        restrict: 'AE',
        controller: 'CarouselController',
        templateUrl: 'src/directives/carousel.html',
    };
    return directive;
});
