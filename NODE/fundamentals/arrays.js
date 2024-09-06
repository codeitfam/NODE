const arr = [{
  id: 1,
  title: 'title',
  tags: ['java', 'node']
},
{
  id: 2,
  title: 'title2',
  tags: ['java boot', ' nodejs']
},
{
  id: 3,
  title: 'title3',
  tags: ['javascript', 'node']
}]

console.log(arr.find(arr => arr.id === 2))
console.log(arr.some(arr => arr.id === 3))
console.log(arr.map(obj => obj.tags.includes('java')))
console.log(arr.filter(obj => obj.tags.includes('node')))
console.log(arr.reduce((acc, obj) => {
  return Array.from(new Set([...acc, ...obj.tags]))
}, []))
console.log(arr.reduce((acc, elem) => acc + elem.id, 0))

console.log([...arr])
console.log(arr.reverse())
const string = 'hello'

function reverseString (str) {
  return console.log(str.split('').reverse().join())
}

reverseString(string)
