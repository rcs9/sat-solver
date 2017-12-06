//Learning syntax *sigh*
let fs = require('fs');
let file = fs.readFileSync('simple0.cnf');
let text = file.toString();

function totalClauses(text) {
  let index = text.indexOf('cnf')
  text = text.substring(index)
  let line = text.substring(text.charAt(4), text.indexOf('\n'))
  return line.substring(0, line.indexOf(' '))
}

function toArray(text, clauses) {
  let lines = []
  let i = 0
  while(i < 10/*text.length*/) {
    lines.push(text.substring(0, text.indexOf('\n')))
    text = text.substring(text.indexOf('\n'))
    //console.log(text.substring(text.indexOf('\n')))
    i++
    //i = i + text.indexOf('\n') //text.indexOf('\n')
    //text = text.substring(i)
  }
  return lines
}

let clauses = totalClauses(text)
console.log(toArray(text, clauses))
