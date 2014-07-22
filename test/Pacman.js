define(function(require) {

    describe('Pacman', function() {

        var Pacman  = require('Pacman');
        var p = new Pacman();

        describe('basic', function() {
            it('should be a constructor function', function() {
                expect(typeof Pacman).toBe('function');
            });
        });
        describe('move', function() {
            it('should have a move method', function() {
                expect(p.move).toBeDefined();
                expect(typeof p.move).toBe('function');
            });
            it('should receive x and y as parameters', function() {
                expect(p.move).toThrow();
                expect(function() { return p.move(2, null); }).toThrow();
                expect(function() { return p.move(222, undefined); }).toThrow();
                expect(function() { return p.move(null, 33); }).toThrow();
                expect(function() { return p.move(undefined, 22); }).toThrow();
                expect(function() { return p.move(33, 22); }).not.toThrow();
            });
        });
    });
});
