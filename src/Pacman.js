define(['Character', 'util'], function(Character, util) {
    var Pacman = function(x, y) {
        Character.call(this, x, y);
    };
    Pacman = util.inherit(Pacman, Character);
    Pacman.prototype.role = 'Pacman';
    return Pacman;
});
