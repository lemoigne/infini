app.factory('ProgramFactory', ['$http', '$location', function ($http, $location) {


    return {
        default: function () {
            var _this = this;
            return $http({
                url: 'http://api-infini.ftv-integ.fr/api/videos',
                method: 'GET'

            }).success(function(datas){
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
        },
        title: function () {
            var _this = this;
            return $http({
                url: 'http://api-infini.ftv-integ.fr/api/videos',
                method: 'GET',
                params: {
                    'sorts[0][field]': 'title',
                    'sorts[0][order]': 'desc'
                }

            }).success(function(datas){
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
        },
        program: function () {
            var _this = this;
            return $http({
                url: 'http://api-infini.ftv-integ.fr/api/videos',
                method: 'GET',
                params: {
                    'sorts[0][field]': 'program',
                    'sorts[0][order]': 'desc'
                }

            }).success(function(datas){
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
        },
        created: function () {
            var _this = this;
            return $http({
                url: 'http://api-infini.ftv-integ.fr/api/videos',
                method: 'GET',
                params: {
                    'sorts[0][field]': 'created',
                    'sorts[0][order]': 'desc'
                }

            }).success(function(datas){
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


