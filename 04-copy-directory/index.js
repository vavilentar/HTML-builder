const fs = require('fs');
const source = './04-copy-directory/files'
const copy = './04-copy-directory/files-copy'

fs.mkdir(copy, () => {
	console.log('Make directory done!')
})

fs.readdir(source, (error, files) => {
	if (error) throw error;
	files.forEach(file => {
		fs.copyFile(`${source}/${file}`, `${copy}/${file}`, () => {})
	})
	console.log('Copying done!')
})