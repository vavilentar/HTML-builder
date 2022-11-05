const fs = require('fs');
const templateSourceDir = './06-build-page/template.html'
const projectDir = './06-build-page/profect-dist/'
const stylesSourceDir = './06-build-page/styles/'
const componentsSourceDir = './06-build-page/components/'
const path = require('path')
const stylesList = [];
let componentInner;


fs.mkdir(projectDir, () => {
	console.log('Make directory done!')
})

function buildProjectHtml() {
	fs.copyFile(`${templateSourceDir}`, `${projectDir}/index.html`, (error) => {
		if (error) throw error
	})
}

function getComponents() {
	fs.readdir(componentsSourceDir, (error, files) => {
		if (error) throw error;
		files.forEach(file => {
			switch (file) {
				case 'articles.html':
					console.log('Found articles component')
					getComponentInner('articles.html','{{articles}}')
					break;
				case 'footer.html':
					console.log('Found footer component')
					break;
				case 'header.html':
					console.log('Found header component')
					break;
			}
		})
	})
}

function mergeStyles() {
	fs.readdir(stylesSourceDir, (error, files) => {
		if (error) throw error
		files.forEach(file => {
			if (path.extname(file) === '.css') {
				stylesList.push(file)
			}
		})
		createBundle(stylesList);
		console.log(`Merge is done!`)
	})

}

function createBundle(list) {
	for (let i = 0; i < list.length; i++) {
		getFileData(list[i])
	}
}

function getFileData(file) {
	fs.readFile(`${stylesSourceDir}/${file}`, "utf8",
		function (error, data) {
			if (error) throw error;
			writeFileData(data)
		});
}

function writeFileData(data) {
	fs.appendFile(`${projectDir}/style.css`, `${data}`, function (err) {
		if (err) throw err
	})
}

function getComponentInner(componentFile, componentName) {
	fs.readFile(`${componentsSourceDir}/${componentFile}`, (err, data) => {
		if(err) throw err
		return componentInner = data.toString();
	}).then(result => {
		fs.readFile(`${componentsSourceDir}/${componentFile}`, (err, data) => {
		if(err) throw err
			let indexInner = result;
			data.replace(componentName, indexInner)
		})
	})
}



mergeStyles()
buildProjectHtml()
getComponents()
