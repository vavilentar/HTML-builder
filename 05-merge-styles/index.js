const fs = require('fs');
const fsProms = require('fs/promises');
const stylePath = './05-merge-styles/styles';
const projDist = './05-merge-styles/project-dist'
const path = require('path')
const stylesList = [];

fs.readdir(stylePath, (error, files) => {
	if (error) throw error
	files.forEach(file => {
		if (path.extname(file) === '.css') {
			stylesList.push(file)
		}
	})
	createBundle(stylesList);
	console.log(`Merge is done!`)
})

function createBundle(list) {
	for (let i = 0; i < list.length; i++) {
		getFileData(list[i])
	}
}

function getFileData(file) {
	fs.readFile(`${stylePath}/${file}`, "utf8",
		function (error, data) {
			if (error) throw error;
			writeFileData(data)
		});
}

function writeFileData(data) {
	fs.appendFile(`${projDist}/bundle.css`, `${data}`, function (err) {
		if (err) throw err
	})
}