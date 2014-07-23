define(function() {
    var Pacman = function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.state = 'inactive';
    };
    Pacman.prototype.setState = function(newState) {
        this.state = newState;
    };
    Pacman.prototype.move = function(x, y) {

        /* jshint eqnull: true */
        if (x == null || y == null) {
            throw 'x or y is invalid input';
        }

        if (this.state === 'inactive') {
            return;
        }

        this.x = x;
        this.y = y;
    };
    Pacman.prototype.moveUp = function() {
        return this.move(this.x, this.y + 1);
    };
    Pacman.prototype.moveDown = function() {
        return this.move(this.x, this.y - 1);
    };
    Pacman.prototype.moveLeft = function() {
        return this.move(this.x - 1, this.y);
    };
    Pacman.prototype.moveRight = function() {
        return this.move(this.x + 1, this.y);
    };
    return Pacman;
});
