const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter text? ', function (text) {
	fs.writeFile("./02-write-file/text.txt", text, function (error) {
		if (error) throw error
	});
})

process.on('exit', () => {
	console.log(`Goodbye!`);
});