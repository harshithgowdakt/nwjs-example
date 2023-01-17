let cp = require('child_process');


// download nwjs-sdk-v0.44.6-win-x64 from https://dl.nwjs.io/v0.44.6/nwjs-sdk-v0.44.6-win-x64.zip and add it nwjs-example folder.
let child = cp.spawn('.\\nwjs-sdk-v0.44.6-win-x64\\nw.exe', ['--remote-debugging-port=9222', 'src/']);
child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on('exit', function (code, signal) {
  console.log('child process exited with ' +
              `code ${code} and signal ${signal}`);
});