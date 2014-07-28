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
        $scope.activeIndex = loopIndex($scope.activeIndex + indexChange);
        $scope.previousIndex = loopIndex($scope.activeIndex - 1);
        $scope.nextIndex = loopIndex($scope.activeIndex + 1);

        function loopIndex(index) {
            if (index < 0) {
                index = $scope.images.length-1;
            }
            if (index > $scope.images.length-1) {
                index = 0;
            }
            return index;
        }
    }

    $scope.addImage = function() {
        console.log($scope.newImageURL);
        if ($scope.newImageURL !== undefined && $scope.newImageURL !== "") {
            newImage = {
                url: $scope.newImageURL
            }
            $scope.images.splice($scope.activeIndex, 0, newImage);
            console.log($scope.images);
        }
    }
});
