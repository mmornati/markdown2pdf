var markdownpdf = require("markdown-pdf")
  , fs = require("fs")
  , watch = require('watch')
  , optimist = require('optimist')
  , path = require('path')


function convertToPdf(file, destinationFolder) {
	var destinationFile = destinationFolder + "/" + path.basename(file).replace('.md', '.pdf')
	markdownpdf().from(file).to(destinationFile, function () {
  		console.log("Document " + file + " converted to " + destinationFile)
	})	
}

function isMarkdown(f, stat) { return path.extname(f) === '.md'; }

var argv = optimist.usage('Markdown to PDF Converter - Listener Application', {
  'folder': {
    description: 'Folder to listen to file changes/creations',
    required: true,
    alias: 'f',
  },
  'outputfolder': {
    description: 'Destination folder for PDF files',
    required: false,
    alias: 'o',
  }
}).argv;

var workingFolder = argv.folder
var destinationFolder = argv.outputfolder ? argv.outputfolder : argv.folder

if (workingFolder && destinationFolder) {  
	console.log("Listening for Markdown files in: " + workingFolder)
	console.log("Storing PDF files into: " + destinationFolder)

	watch.createMonitor(workingFolder, { filter: isMarkdown }, function (monitor) {
	    monitor.on("created", function (f, stat) {
	      	console.log("Starting convertion of new document " + f + "(" + stat.mtime + ")")
	      	convertToPdf(f, destinationFolder)
	    })
	    monitor.on("changed", function (f, curr, prev) {
	      	console.log("Starting convertion of modified document " + f)
	      	convertToPdf(f, destinationFolder)
	    })
	    monitor.on("removed", function (f, stat) {
	      	console.log("File removed " + f)
	    })
	    //monitor.stop(); // Stop watching
	 }) 
} else {
	optimist.showHelp();
}