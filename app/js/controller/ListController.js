app.controller('ListController', ['$scope', '$http', 'ProgramFactory', "filterFilter", function($scope, $http, ProgramFactory, filterFilter) {

    $scope.programs = [];
    ProgramFactory.getProgram().success(function(data){


        for(var i in data){

            var key = i;
            var val = data[i];
            for(var j in val){

                var sub_key = j;

                if(sub_key != 'program' && sub_key != 'title' && sub_key != 'created') {
                    delete data[i][sub_key];
                    $scope.programs = data;
                }

            }

        }

        $scope.currentPage = 1;
        $scope.maxSize = 5;
        $scope.entryLimit = 5;

        /* init pagination with $scope.programs */
        $scope.noOfPages = Math.ceil($scope.programs.length/$scope.entryLimit);

        $scope.$watch('searchProgram', function(term) {
            $scope.filtered = filterFilter($scope.programs, term);
            $scope.noOfPages = Math.ceil($scope.filtered.length/$scope.entryLimit);
        });


    });

    $scope.placeholder = 'Choisissez votre programme';
    $scope.sortType = "title";








}]);

