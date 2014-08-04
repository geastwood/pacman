define(function(require) {
    Pacman = require('Pacman');
    describe('Pacman', function() {
        var p;
        beforeEach(function() {
            p = new Pacman();
        });
        it('should have a "Pacman" as role', function() {
            expect(p.role).toBe('Pacman');
        });
        it('move correctly', function() {
            p.x = 20;
            p.y = 100;
            p.state = 'active';
            p.moveUp();
            expect(p.x).toBe(20);
            expect(p.y).toBe(101);
            p.moveLeft();
            expect(p.x).toBe(19);
        });
    });
});
