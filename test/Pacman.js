define(function(require) {

    describe('Pacman', function() {

        var Pacman  = require('Pacman');
        var p = new Pacman();

        it('should be a constructor function', function() {
            expect(typeof Pacman).toBe('function');
        });
        it('should have a move method', function() {
            expect(p.move).toBeDefined();
            expect(typeof p.move).toBe('function');
        });
    });
});
