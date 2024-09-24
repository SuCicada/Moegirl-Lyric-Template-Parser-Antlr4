const fs = require('fs');
const path = require('path');

const REQUIRE_PATH_TEST = /\.(txt|html|css)$/;

function register() {
    const Module = require('module');
    const originalLoad = Module._load;
    const cwd = process.cwd();

    Module._load = function (request, parent) {
        if (request.match(REQUIRE_PATH_TEST)) {
            const filePath = path.join(path.dirname(parent ? parent.filename : cwd), request);
            console.log('Loading file:', filePath);
            return fs.readFileSync(filePath, 'utf8');
        }
        return originalLoad.apply(this, arguments);
    };

    return () => {
        Module._load = originalLoad;
    };
}

register();