const name="Saksham"
const age=22
//console.log(name + age + "best") {older format}
console.log(`Hello, My name is ${name}, and age is ${age}` ); //{newer format}
const NameGame= new String("Saksham-play")
console.log(NameGame[0])
console.log(NameGame.__proto__)
console.log(NameGame.length)
console.log(NameGame.toLocaleUpperCase())
console.log(NameGame.charAt(3))
console.log(NameGame.indexOf('p'))

const newString = NameGame.substring(0,4)
console.log(newString)

const anotherString =  NameGame.slice(-11,4)
console.log(anotherString)

const newstringone = "    Hey Saksham   "
console.log(newstringone.trim())

const url = "https://developer.mozilla.org/en-US/"

console.log(url.replace('en', 'in'))

console.log(url.includes('sundar'))

console.log(NameGame.split('-'))