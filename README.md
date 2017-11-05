# Markdown 2 PDF Watcher

[![Greenkeeper badge](https://badges.greenkeeper.io/mmornati/markdown2pdf.svg)](https://greenkeeper.io/)[![Maintainability](https://api.codeclimate.com/v1/badges/4d0523b998b018af5a2e/maintainability)](https://codeclimate.com/github/mmornati/markdown2pdf/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/4d0523b998b018af5a2e/test_coverage)](https://codeclimate.com/github/mmornati/markdown2pdf/test_coverage)

This projet uses nodejs [Files Watch](https://github.com/mikeal/watch) to check changes on markdown document.
If a new document, or a change on an existing one, is detected the basic PDF conversion is executed.

## Install dependencies

```bash
npm install
```

## Execute

To run it:

```bash
node index.js -f /source/folder -o /destination/folder 
``` 

the *f* paremeter (required) is the folder to watch.
the *o* parameter (optional) is the target destination (for pdf). If the parameter is not specied the source folder is used.

## CLI Help

```
Markdown to PDF Converter - Listener Application

Options:
  --folder, -f        Folder to listen to file changes/creations
  --outputfolder, -o  Destination folder for PDF files
```
