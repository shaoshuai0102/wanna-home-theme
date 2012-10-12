var path = require('path');

exports.wrap = function(viewEngine, data) {
    viewEngine.registerHelper('active', function(str1, str2) {
        console.log(str1, str2);
        str1 = str1 || '';
        str2 = str2 || '';
        return path.normalize(str1) == path.normalize(str2) ? 'active' : '';
    });

    viewEngine.registerHelper('isDocumentation', function(context) {
        //return path.normalize() == path.normalize(str2) ? 'active' : '';
        return context.path.indexOf('pages') == 0 ? 'active' : '';
    });

    return data;
}

exports.wrapSingle = function(viewEngine, data) {
    return data;
}
