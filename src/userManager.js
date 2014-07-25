define(['Pacman'], function(Pacman) {
    var collections = [];
    return {
        create: function(name) {
            var p = new Pacman();

            p.name = name || 'Pac';

            return p;
        },
        get: function(name) {
            /* jshint eqnull:true */
            if (name == null) {
                throw 'Name must be specified';
            }
        }
    };
});
