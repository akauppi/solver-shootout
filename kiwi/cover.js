/*
* Sample from cover of:
* https://github.com/IjzerenHein/kiwi.js/
*
* Converted to ES6 syntax ('const') and ESM; added console output.
*/
import { Solver, Variable, Strength, Constraint, Expression, Operator } from "kiwi.js"
import { equal } from 'assert'

// Create a solver
const solver = new Solver();

// Create edit variables
const left = new Variable();
const width = new Variable();
solver.addEditVariable(left, Strength.strong);
solver.addEditVariable(width, Strength.strong);
solver.suggestValue(left, 100);
solver.suggestValue(width, 400);

// Create and add a constraint
const right = new Variable();
solver.addConstraint(new Constraint(new Expression([-1, right], left, width), Operator.Eq));

// Solve the constraints
solver.updateVariables();

console.log("Figured right to be:", right.value())
equal(right.value(), 500);
