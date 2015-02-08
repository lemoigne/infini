var app = angular.module('ListApp', ['ui.bootstrap']);

app.config(function($httpProvider){
    $httpProvider.defaults.headers.get = { 'X-FTVEN-ID' : 'id: fz43ah63-s63m-0wal-jyhc-u577f4p0093j, expire: 2114-10-27T17:52:48+0100, token: YWI3ZTc4YjRiNzA1NjQxNzJjZjJlOTM2MTE4YzA5YzY2MzA1YTAzNw==' };
});
