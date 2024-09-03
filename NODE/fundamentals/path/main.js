const path = require('node:path')

console.log(path.sep)

// unir rutas con join

const filePath = path.join('content', 'folder', 'file')
console.log(filePath)
