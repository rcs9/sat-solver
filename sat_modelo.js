/**
 * This file should be placed at the node_modules sub-directory of the directory where you're
 * executing it.
 *
 * Written by Fernando Castor in November/2017.
 */
exports.solve = function(fileName) {
  let formula = readFormula(fileName)
  let result = doSolve(formula.clauses, formula.variables)
  return result // two fields: isSat and satisfyingAssignment
}

// Receives the current assignment and produces the next one
function nextAssignment(currentAssignment) {
  // implement here the code to produce the next assignment based on currentAssignment.
  return newAssignment
}

function doSolve(clauses, assignment) {
  let isSat = false
  while ((!isSat) && /* must check whether this is the last assignment or not*/) {
    // does this assignment satisfy the formula? If so, make isSat true.

    // if not, get the next assignment and try again.
    assignment = nextAssignment(assignment)
  }
  let result = {'isSat': isSat, satisfyingAssignment: null}
  if (isSat) {
    result.satisfyingAssignment = assignment
  }
  return result
}

function readFormula(fileName) {
  // To read the file, it is possible to use the 'fs' module.
  // Use function readFileSync and not readFile.
  // First read the lines of text of the file and only afterward use the auxiliary functions.
  let fs = require('fs')
  fileName = fs.readFileSync(fileName) //let fileName = 'fileName.cnf'?
  let contents = fileName.toString();
  let text = new Array(contents.) // An array containing lines of text extracted from the file.

  let clauses = readClauses(text)
  let variables = readVariables(clauses)

  // In the following line, text is passed as an argument so that the function
  // is able to extract the problem specification.
  let specOk = checkProblemSpecification(text, clauses, variables)

  let result = { 'clauses': [], 'variables': [] }
  if (specOk) {
    result.clauses = clauses
    result.variables = variables
  }
  return result
}

function readClauses(text) {

}

function totalClauses(text) {
  let index = text.indexOf('cnf')
  text = text.substring(index)
  let line = text.substring(text.charAt(4), text.indexOf('\n'))
  return line.substring(0, line.indexOf(' '))
}
