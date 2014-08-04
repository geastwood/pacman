define(function() {
    var Character = function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.state = 'inactive';
    };
    Character.prototype.setState = function(newState) {
        this.state = newState;
    };
    Character.prototype.move = function(x, y) {

        /* jshint eqnull: true */
        if (x == null || y == null) {
            throw 'x or y is invalid input';
        }

        if (this.state === 'inactive' || this.state == null) {
            return;
        }

        this.x = x;
        this.y = y;
    };
    Character.prototype.moveUp = function() {
        return this.move(this.x, this.y + 1);
    };
    Character.prototype.moveDown = function() {
        return this.move(this.x, this.y - 1);
    };
    Character.prototype.moveLeft = function() {
        return this.move(this.x - 1, this.y);
    };
    Character.prototype.moveRight = function() {
        return this.move(this.x + 1, this.y);
    };
    return Character;
});
