define(function() {
    var Pacman = function() {};
    Pacman.prototype.move = function(x, y) {

        /* jshint eqnull: true */
        if (x == null || y == null) {
            throw 'x or y is invalid input';
        }
        this.x = x;
        this.y = y;
    };
    return Pacman;
});
