(function() {
    var app = angular.module('store-directives', []);
    app.directive('storeProducts', function () 
    {
        return {
            restrict: 'E',
            templateUrl: 'views/store-products.html'
        };
    });

    app.directive('panelSection', function () 
    {
        return {
            restrict: 'E',
            templateUrl: 'views/panel-section.html',
            controller: function(){
                this.tab = 1;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panel'
        };
    });
    
    app.directive('reviewForm', function () 
    {
        return {
            restrict: 'E',
            templateUrl: 'views/review-form.html',
            controller: function() {
                this.review = {};
                this.addReview = function(product) {
                    this.review.createdOn = Date.now();
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl'
        };
    });
})();