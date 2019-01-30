var os = require('os');
var convertTo = require('./convertTime')

function getOSinfo() {
            //SYSTEM info
            var type = os.type();
            var release = os.release();
            if(type === 'Darwin') {
                type = 'OSX';
            } else if(type === 'Windows_NT') {
                type = 'Windows';
            }
            console.log('System:', type);
            console.log('Release:', release);
            //CPU info
            var cpu = os.cpus()[0].model;
            console.log('CPU model: ',cpu);
            //TIME SINCE LAST START OF SYSTEM info
            var uptime = os.uptime();
            console.log('Uptime: ' + convertTo.niceTime(uptime));
            //USER info
            var userInfo = os.userInfo();
            console.log('User name: ', userInfo.username);
            console.log('Homedir: ', userInfo.homedir);
            process.exit();
}

exports.print = getOSinfo;