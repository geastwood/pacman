define(function(require) {

    describe('User Manager api', function() {
        var userManger;
        beforeEach(function() {
            userManager = require('userManager');
        });

        it('create', function() {
            expect(userManager.create).toBeDefined();
        });
        it('get', function() {
            expect(userManager.get).toBeDefined();
        });
    });
    describe('create', function() {
        var userManger;
        beforeEach(function() {
            userManager = require('userManager');
        });
        it('should take an optinal name', function() {
            var p = userManager.create('foo');
            expect(p.name).toBe('foo');
            var p1 = userManager.create();
            expect(p1.name).toBe('Pac');
        });
    });
    describe('get', function() {
        var userManager;
        beforeEach(function() {
            userManager = require('userManager');
        });
        it('name must be specified', function() {
            var p = userManager.create('foo');
            var p1 = userManager.create('');
            expect(userManager.get).toThrow();
        });
    });
});
