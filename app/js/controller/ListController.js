app.controller('ListController',
    ['$scope',
        '$http',
        'ProgramFactory',
        "filterFilter",
        "listDefault",
        "listTitle",
        "listProgram",
        "listCreated",
        "$timeout",
        function ($scope,
                  $http,
                  ProgramFactory,
                  filterFilter,
                  listDefault,
                  listTitle,
                  listProgram,
                  listCreated,
                  $timeout) {

            $scope.programs = listDefault.data;


            $scope.sortTitle = function () {
                $(".form-control").val("");
                $scope.currentPage = 1;
                $scope.programs = listTitle.data;

            };
            $scope.sortProgram = function () {
                $(".form-control").val("");
                $scope.currentPage = 1;
                $scope.programs = listProgram.data;
            };
            $scope.sortCreated = function () {
                $(".form-control").val("");
                $scope.currentPage = 1;
                $scope.programs = listCreated.data;
            };

            $scope.filterSearch = function () {


                if ($scope.searchProgramFilter.length === 0) {

                    $scope.loader = false;
                    $scope.programs = listDefault.data;
                } else {
                    $scope.loader = true;

                    $http({
                        url: 'http://api-infini.ftv-integ.fr/api/videos',
                        method: 'GET',
                        params: {
                            'filters[0][field]': 'program',
                            'filters[0][operator]': 'equals',
                            'filters[0][value]': $scope.searchProgramFilter
                        }

                    }).success(function (datas) {

                        if (typeof datas[0] == 'undefined') {
                            $scope.loader = true;
                            $scope.loaded = true;

                        } else {
                            $scope.loader = false;
                            $scope.loaded = false;
                        }

                        $scope.programs = datas;

                        return $scope.programs;
                    });


                }


            };

            $scope.currentPage = 1;
            $scope.maxSize = 5;
            $scope.entryLimit = 5;

            $scope.noOfPages = Math.ceil($scope.programs.length / $scope.entryLimit);

            $scope.$watch('searchProgram + searchProgramFilter', function (term) {
                $timeout(function(){
                    $scope.filtered = filterFilter($scope.programs, term);
                    $scope.noOfPages = Math.ceil($scope.filtered.length / $scope.entryLimit);
                }, 1000);
            });


            $scope.placeholder = 'Choisissez votre programme';
            $scope.placeholderFilterProgram = 'Tapez votre mot clef';
            $scope.sortType = "title";


        }
    ])
;

