var app = angular.module('livrariaApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/servos/add', {
		templateUrl: 'templates/add_servo.html',
		controller: 'ServosCtrl'
	})
	.when('/servos', {
		templateUrl: 'templates/servos.html',
		controller: 'ServosCtrl'
	})
	.when('/livros', {
		templateUrl: 'templates/livros.html',
		controller: 'LivrosCtrl'
	})
}]);

app.controller('ServosCtrl', function () {
	this.servosDados = [
		{'id': 0,'nome':'Bruno Mengatto','fone':'19 99370-5324', 'imgUrl': 'imgs/bruno.jpg'},
		{'id': 1,'nome':'Isabella de Araújo','fone':'19 99806-8787', 'imgUrl': 'imgs/isa.jpg'},
		{'id': 2,'nome':'Lucimeire Ap. Mengatto','fone':'019 99841-0604', 'imgUrl': 'imgs/lucimeire.jpg'}
	];
});

app.controller('LivrosCtrl', function(){
	
});