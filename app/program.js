process.stdin.setEncoding('utf-8');

var OSinfo = require('../modules/OSinfo');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var instruction = input.toString().trim();
    console.log(instruction);
    switch(instruction){
    	case '/exit': 
	    	process.stdout.write('Quitting app...\n');
	    	process.exit();
    	case 'v':
	    	console.log(process.versions);
	    	process.exit();
    	case 'lang': 
	    	console.log(process.env.LANG);
	    	process.exit();
        case 'getOSinfo':
            OSinfo.print();
    	default: 
    		process.stderr.write('Wrong instruction. Try again: ');
    		process.stdin.read();
    }
});