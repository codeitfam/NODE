const str = 'cadenas de prueba'
const str2 = ' cadenas de prueba 2 '

console.log(str.indexOf('s'))
console.log(str.includes('de'))
console.log(str.slice(1,4))
console.log(str.substring(1,4))
console.log(str.charAt(0))
console.log(str.startsWith('a')) //comprueba si la cadena empieza en el param
console.log(str.endsWith('a')) //comprueba si la cadena termina en el param
console.log(str.repeat(2)) //repite la cadena
console.log(str.split(' ')) //convierte en array
console.log(str.search('de')) // busca el indice de la cadenas
console.log(str.toUpperCase()) //pasa a mayusculas
console.log(str.toLowerCase()) //pasa a minusculas
console.log(str.replace('cadenas', 'letras')) //reemplaza el primer param por el segundo en la cadenas
console.log(str.trim())
