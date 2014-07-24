carouselDemo.controller('CarouselController', function($scope, $element, $attrs, $animate) {
    $scope.images = [
        {url: "http://i.imgur.com/quHwgVX.jpg"},
        {url: "http://i.imgur.com/FLy7RLo.jpg"},
        {url: "http://i.imgur.com/5iPwsKf.jpg"},
        {url: "http://i.imgur.com/fqGEZxo.jpg"},
        {url: "http://i.imgur.com/GoFD8KU.jpg"},
        {url: "http://i.imgur.com/axa1eW0.jpg"},
        {url: "http://i.imgur.com/RInOfZp.jpg"}
    ];
    $scope.previousIndex = $scope.images.length-1;
    $scope.activeIndex = 0;
    $scope.nextIndex = 1;

    $scope.nextImage = function(indexChange) {
        $scope.previousIndex += indexChange;
        $scope.activeIndex += indexChange;
        $scope.nextIndex += indexChange;
        if ($scope.previousIndex < 0) {
            $scope.previousIndex = $scope.images.length-1;
        }
        if ($scope.activeIndex < 0) {
            $scope.activeIndex = $scope.images.length-1;
        }
        if ($scope.nextIndex < 0) {
            $scope.nextIndex = $scope.images.length-1;
        }
        if ($scope.previousIndex > $scope.images.length-1) {
            $scope.previousIndex = 0;
        }
        if ($scope.activeIndex > $scope.images.length-1) {
            $scope.activeIndex = 0;
        }
        if ($scope.nextIndex > $scope.images.length-1) {
            $scope.nextIndex = 0;
        }
    }
});
