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
            it('should have "moveUp", "moveDown", "moveLeft", "moveRight"', function() {
                expect(p.moveUp).toBeDefined();
                expect(p.moveDown).toBeDefined();
                expect(p.moveLeft).toBeDefined();
                expect(p.moveRight).toBeDefined();
            });
        });
        describe('move correctly', function() {
            var p;
            beforeEach(function() {
                p = new Pacman(20, 20);
                p.setState('active');
            });
            it('up correctly', function() {
                p.moveUp();
                expect(p.x).toBe(20);
                expect(p.y).toBe(21);
            });
            it('down correctly', function() {
                p.moveDown();
                expect(p.x).toBe(20);
                expect(p.y).toBe(19);
                p.moveDown();
                expect(p.x).toBe(20);
                expect(p.y).toBe(18);
            });
            it('left correctly', function() {
                p.moveLeft();
                p.moveDown();
                expect(p.x).toBe(19);
                expect(p.y).toBe(19);
            });
            it('right correctly', function() {
                p.moveLeft();
                p.moveRight();
                p.moveDown();
                expect(p.x).toBe(20);
                expect(p.y).toBe(19);
            });
        });
        describe('move with state', function() {
            var p;
            beforeEach(function() {
                p = new Pacman(20, 20);
            });
            it('should not move without being alive', function() {
                p.moveUp();
                p.moveLeft();
                expect(p.x).toBe(20);
                expect(p.y).toBe(20);
            });
        });
        describe('api for setting Status', function() {
            var p;
            beforeEach(function() {
                p = new Pacman(20, 20);
            });
            it('default to inactive', function() {
                expect(p.state).toBe('inactive');
            });
            it('possible to set to "active"', function() {
                p.setState('active');
                expect(p.state).toBe('active');
            });
        });
    });

});
