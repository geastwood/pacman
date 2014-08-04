define(function(require) {
    var util = require('util');
    describe('util functions', function() {
        it('each', function() {
            var rst = [];
            util.each({name: 'foo', type: 'object'}, function(v) {
                rst.push(v);
            });
            expect(rst).toEqual(['foo', 'object']);
        });
    });
});
