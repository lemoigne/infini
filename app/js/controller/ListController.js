app.controller('ListController',
    ['$scope',
        '$http',
        'ProgramFactory',
        "filterFilter",
        "programs",
        function ($scope,
                  $http,
                  ProgramFactory,
                  filterFilter,
                  programs) {

            $scope.programs = programs.data;

            $scope.currentPage = 1;
            $scope.maxSize = 5;
            $scope.entryLimit = 5;

            $scope.noOfPages = Math.ceil($scope.programs.length / $scope.entryLimit);

            $scope.$watch('searchProgram', function (term) {
                $scope.filtered = filterFilter($scope.programs, term);
                $scope.noOfPages = Math.ceil($scope.filtered.length / $scope.entryLimit);
            });


            $scope.placeholder = 'Choisissez votre programme';
            $scope.sortType = "title";


        }]);

