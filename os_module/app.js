const { log } = require('console')
const os = require('os')
const { exec, spawn } = require('child_process');

// log(`arch : ${os.arch()}`)
// log(os.cpus())
// log(os.cpus().length)
// log(os.hostname())
// log(os.platform())
// log(os.endianness())
// log(os.userInfo())
// log(os.type())
// log(os.totalmem())
// log(os.networkInterfaces())
// log(os.homedir())
// log(os.tmpdir())

const systemSummary = {
    platform: os.platform(),
    release: os.release(),
    cpu: os.cpus()[0].model,
    cores: os.cpus().length,
    memory: {
        totalGB: (os.totalmem() / 1024 ** 3).toFixed(2),
        freeGB: (os.freemem() / 1024 ** 3).toFixed(2),
    },
    uptimeHours: (os.uptime() / 3600).toFixed(2),
    userInfo: os.userInfo(),
};

console.log(systemSummary);


setTimeout(() => {
    // cmd.shutDown()
    cmd.show();
    cmd.ping('google.com')
}, 3000)


const cmd = {
    shutDown() {
        exec('shutdown /s /t 0', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            console.log('Shutdown initiated (Windows)');
        });
    },
    show() {
        exec('dir', (error, stdout, stderr) => {
            if (error) {
                console.error('Error:', error.message);
                return;
            }
            if (stderr) {
                console.error('stderr:', stderr);
                return;
            }
            console.log('stdout:', stdout);
        });
    },
    ping(domain) {
        const child = spawn('ping', [domain]);

        child.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        child.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        child.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }
}



