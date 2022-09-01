// Download "FortiClientTools_5.4.0.0780.zip" from support.

// Use FortiSSLVPNclient.exe.

// FortiSSLVPNclient connect -h xxx.xxx.xxx.xxx:portnumber -u username:password

// FortiSSLVPNclient disconnect

// There are other options, using a pre saved configuration.



//## Function Version 1
const { exec } = require('child_process');
exec('start Photoshop.exe ', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    // do whatever with stdout
})


//## Function Version 2
var spawn = require("child_process").spawn,child;
child = spawn("powershell.exe",["c:\\temp\\helloworld.ps1"]);
child.stdout.on("data",function(data){
    console.log("Powershell Data: " + data);
});
child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});
child.on("exit",function(){
    console.log("Powershell Script finished");
});
child.stdin.end(); //end input

//## Function Version 3
var PSRunner = {
    send: function(commands) {
        var self = this;
        var results = [];
        var spawn = require("child_process").spawn;
        var child = spawn("powershell.exe", ["-Command", "-"]);

        child.stdout.on("data", function(data) {
            self.out.push(data.toString());
        });
        child.stderr.on("data", function(data) {
            self.err.push(data.toString());
        });

        commands.forEach(function(cmd){
            self.out = [];
            self.err = [];
            child.stdin.write(cmd+ '\n');
            results.push({command: cmd, output: self.out, errors: self.err});
        });
        child.stdin.end();
        return results;
    },
};

module.exports = PSRunner;