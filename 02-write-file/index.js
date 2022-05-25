const { stdin, stdout, exit } = process;
const fs = require('fs');
const output = fs.createWriteStream('02-write-file/output.txt');
stdout.write('Привет, введи любой текст\n');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') exit();
  output.write(data);
});
process.on('exit', () => stdout.write('Пока!'));
process.on('SIGINT', exit);