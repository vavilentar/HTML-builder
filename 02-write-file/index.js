const fs = require('fs');

fs.writeFile("./02-write-file/text.txt", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum vitae nemo facere, error assumenda cum placeat suscipit quas optio sint perspiciatis voluptates rem dolorem accusantium quam magni ex animi.", function(error){
	if(error) throw error
 });