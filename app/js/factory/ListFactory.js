app.factory('ProgramFactory', ['$http', function($http){


    return{
        getProgram : function() {
            return $http.get('http://api-infini.ftv-integ.fr/api/videos?sorts[0][field]=created&sorts[0][order]=desc');
        }
    };

}]);
