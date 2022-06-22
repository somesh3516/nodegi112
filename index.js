var fs = require('fs');

fs.readFile("./data.js", function(err, data) {
    if (!err) {
        var str = data.toString();
        console.log(str);
    };
});