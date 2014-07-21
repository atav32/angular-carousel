carouselDemo.controller('CarouselController', function($scope, $attrs, $animate) {
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
    $scope.image = $scope.images[$scope.imageIndex];
    console.log($scope);

    $scope.nextImage = function(indexChange) {
        $scope.imageIndex += indexChange;
        if ($scope.imageIndex < 0) {
            $scope.imageIndex = $scope.images.length-1;
        }
        if ($scope.imageIndex > $scope.images.length-1) {
            $scope.imageIndex = 0;
        }
        console.log($scope.imageIndex);
        $scope.image = $scope.images[$scope.imageIndex];
    }
});
