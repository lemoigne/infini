app.factory('ProgramFactory', ['$http', '$location', function ($http, $location) {


    return {
        programList: [],
        find: function () {
            var _this = this;
            return $http({
                url: 'http://api-infini.ftv-integ.fr/api/videos',
                method: 'GET',
                params: {
                    'sorts[0][field]': 'created',
                    'sorts[0][order]': 'desc'
                }

            });

        }
    };

}]);


