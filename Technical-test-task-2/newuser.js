
var app = angular.module('app', []);

	app.controller('MyCtrl',function($scope) {
		$scope.myUser = [
		{id:'', firstname: 'Jake', lastname:'Smith' },
		{id:'', firstname: 'tom', lastname:'hat'},
		{id:'', firstname: 'lauren', lastname:'bran' },
		{id:'', firstname: 'nadia', lastname:'bill'}


		];

		$scope.add = function(){
			$scope.myUser.push({
				id:$scope.id, firstname: $scope.firstname, lastname:$scope.lastname, avatar:$scope.avatar

			});
			$scope.id='';
			$scope.firstname='';
			$scope.lastname='';
			$scope.avatar='';

		};//add row

		$scope.edit = function(id){

			var index =getSelectedIndex(id);
			$scope.myUser[index].firstname = $scope.firstname;
			$scope.myUser[index].lastname = $scope.lastname;
			$scope.myUser[index].avatar = $scope.avatar;

		};//update the row

		$scope.selectEdit =function(id){

			var index = getSelectedIndex(id);
			var user = $scope.myUser[index];
			$scope.id = user.id ;
			$scope.firstname = user.firstname ;
			$scope.lastname = user.lastname ;
			$scope.avatar = user.avatar ;
		};//edit the row



		$scope.del = function(id){
			var index = getSelectedIndex(id);
			$scope.myUser.splice(index,1);


		};//delete row

	function getSelectedIndex(id){

			for(var i=0; i<$scope.myUser.length; i++)
				if($scope.myUser[i].id==id)
					return i;
				return -1;
		}//selecting the row
	});
	
		function myAvatar() {
    	var x = document.getElementById("myFile");
    	x.disabled = true;
	}		//avatar file