(function() {
	var app = angular.module('gemStore', []);

	app.controller('ReviewController', function() {
		this.review = {};
		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.controller('StoreController', ['$http', function($http) {
		var store = this;
		store.products = [];
		$http.get('/products.json').success(function(data) {
			store.products = data;
		});
	}]);

	app.directive('storeProducts', function () {
		return {
			restrict: 'E',
			templateUrl: 'store-products.html',
		};
	});
	
	app.directive('panelSection', function () {
		return {
			restrict: 'E',
			templateUrl: 'panel-section.html',
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
})();
