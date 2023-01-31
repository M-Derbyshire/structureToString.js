# structureToString.js

**structureToString.js** is a JavaScript module created to make it easier for JavaSscript/TypeScript developers to change the content of complicated arrays/objects. 

This module provides a function that stringifies an array/object into valid JS (much like JSON.Stringify, except you can paste the result straight back into your code, and it will work).

This could be useful when you have a large amount of dummy data, but the structure of that data now needs to change. You can simply copy the data into a node script, make the changes, and then use this to stringify the result (for an example, see ```/example_scripts/array_change_example.js```). Once you have the string, you can console.log it out, and pipe it into a file. Finally, your can copy that string from the file, and paste it straight back into your codebase (replacing the original data structure).

## Setting Up structureToString.js

To be able to use **structureToString.js** in your Node scripts, you will need to store it in one of your local *node_modules* directories. 

First, start a Node console from your command line (with the ```node``` command), and then enter ```module.paths```. This will give you the list of directories that Node will try to find modules in.

If you place **structureToString.js** in one of those directories, you will be able to use it in any of your Node scripts.

[My Twitter: @mattdarbs](http://twitter.com/mattdarbs)  
[My Portfolio](http://md-developer.uk)