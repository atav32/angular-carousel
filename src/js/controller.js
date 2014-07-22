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
    $scope.imageIndex = 0;
    $scope.sliding = false;

    $scope.nextImage = function(indexChange) {
        $scope.sliding = true;
        $scope.imageIndex += indexChange;
        if ($scope.imageIndex < 0) {
            $scope.imageIndex = $scope.images.length-1;
        }
        if ($scope.imageIndex > $scope.images.length-1) {
            $scope.imageIndex = 0;
        }
        $scope.sliding = false;
    }

    $scope.setPosition = function(index) {
        leftPosition = (index-$scope.imageIndex)*100;
        console.log(leftPosition);
        console.log($element);
        //$element.css('left', leftPosition + '%');
    }
});
