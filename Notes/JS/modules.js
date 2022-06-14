/* 
2 different runtimes:
  1 The Node runtime environment and the module.exports and require() syntax.
  2 The browser’s runtime environment and the ES6 import/export syntax.

  In node: 
    EXPORT
  at the end -> module.exports = objectToExport;
    IMPORT
  at the top -> const variable = require('./pathToExportedObject') 

  In browser: 
  the script src must have type="module"
  the folder must be available to all the pages that require it
    EXPORT
  at the end of the module -> export { resourceToExportA, resourceToExportB, ...}
  or when declaring something -> export const newFunction = () =>{ doSomething }
  you can add export default to make it the default import
    IMPORT
  at the top -> import { exportedResourceA, exportedResourceB } from '/path/to/module.js';
  you can import defaultExport or just not declare it (import newVariable from 'moduleLocation' will create a newVariable with the defaulted export imported)
  you can add an alias (import defaultExport as alias from './module.js')
*/