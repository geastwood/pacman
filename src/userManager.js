define(['Character'], function(Character) {
    var collections = [];
    return {
        create: function(name) {
            var p = new Character();

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
