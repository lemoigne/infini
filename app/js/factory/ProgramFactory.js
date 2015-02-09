app.factory('ProgramFactory', ['$http', '$location', function ($http, $location) {


    return {
        find: function () {
            var _this = this;
            return $http.get('http://api-infini.ftv-integ.fr/api/videos').success(function (datas) {
                _this.programList = datas;


                for (var i in _this.programList) {

                    var key = i;
                    var val = _this.programList[i];
                    for (var j in val) {

                        var sub_key = j;


                        if (sub_key != 'program' && sub_key != 'title' && sub_key != 'created') {

                            delete _this.programList[i][sub_key];

                        }
                    }
                }


                return _this.programList;
            });
        }
    };

}]);


