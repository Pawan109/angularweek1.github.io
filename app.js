(function() {

'use strict';

angular.module ('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController );

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
$scope.dishes = "";
$scope.message="";

$scope.checklunch = function() {

      if($scope.dishes===""){
        $scope.message="please enter the data first !!"
        $scope.noticeType="danger!"
      }
      else {
        $scope.empty=false;
        $scope.checked=true;

        var $foodItemsArray = $scope.dishes.split(",");
        var $length = $foodItemsArray.$length
        if (($length <= 3)|| ($length==4 && $foodItemsArray[3]==="")){

          $scope.message = "Enjoy!"
          $scope.noticeType="success."
        }
        else {
          $scope.message = "Too Much
          $scope.noticeType= "warning!"
        }


      }
                  }

          };



})




 ();
