const secretFolder = './03-files-in-folder/secret-folder';
const fs = require('fs');
const path = require('path')

fs.readdir(secretFolder, (error, files) => {
	if (error) throw error;
	files.forEach(file => {
		fs.stat(`${secretFolder}/${file}`, (error, stats) => {
			if (error) {
				console.log(error);
			} else {
				// if (stats.isDirectory()) {
				// 	console.log(file)
				// 	fs.stat(`${file}`, (error, stats) => {
				// 		console.log(`${path.parse(file).name} - ${path.extname(file)} - ${stats.size} bytes`)
				// 	})
				// } else {
				// }
				console.log(`${path.parse(file).name} - ${path.extname(file)} - ${stats.size} bytes`)
			}
		});
	});
});