var request = require('sync-request');
var server = 'http://127.0.0.1:9000';

var self = module.exports = {
    info: function () {
        return JSON.parse(self.get('info'));
    },
    forward: function () {
        self.get('forward');
    },
    rotate: function () {
        self.get('rotate');
    },
    reset: function () {
        self.get('reset');
    },
    before_obstacle: function () {
        return self.info().before_obstacle;
    },
    on_goal: function () {
        return self.info().on_goal;
    },
    get: function (path) {
        return request('GET', server + '/api/' + path).getBody();
    }
};
