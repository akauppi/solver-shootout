/*
* Our sample case
*/

const vars = `
arc-green.start: 50,20
arc-green.end: 100,20
arc-green.r: 30
arc-green.start-deg: 56.3

arc-pink.start: 120,50
arc-pink.end: 120,20
arc-pink.r: 15
arc-pink.start-def: 180

line-pink.start: 120,50
line-pink.end: 180,65
`;

const constraints = `
arc-green is fixed
arc-pink.mid is on arc-green
line(arc-pink.mid, line-pink.end) is perpendicularWith arc-green
[arc-pink.start, arc-pink.end] are symmetricalOver line(arc-pink.mid, line-pink.end))
arc-pink.r is fixed
line(arc-pink.mid, line-pink.end).length is fixed
`;

// Make the system fully defined; the remaining ones are the free variables
//
const steeringVars = `
angle: angle-deg(line-pink.start, arc-green.center)
`;

// Feed in vars & constraints
// ..here

// Suggest a solution
// ..here

// Steer
//
//steer("angle", 120)
// ..read the changed values


// Trying to do the above, in code..
//
import { Solver, Variable, Strength, Constraint, Expression, Operator } from "kiwi.js"

// Variables
//
const arcGreenStart = createVarP([50,20])
const arcGreenEnd = createVarP([100,20])
const arcGreenR = createVarDist(30)
const arcGreenStartDeg = createVarAngle(56.3)

const arcPinkStart = createVarP([120,50])
const arcPinkEnd = createVarP([120,20])
const arcPinkR = createVarDist(15)
const arcPinkStartDeg = createVarAngle(180)

const linePinkStart = createVarP([120,50])
const linePinkEnd = createVarP([180,65])

// Help geometry
//
const arcPinkMid = midPointOfArc(arcGreenStart, arcGreenEnd, arcGreenR, arcGreenStartDeg)

// Constraints
//
const angleDeg = new Variable();    // the degree of freedom

const solver = new Solver();

// Nothing in arc green moves
[arcGreenStart, arcGreenEnd, arcGreenR, arcGreenStartDeg].forEach( x => { x.isFixed() } )

// arc-pink.mid is on arc-green
//
// tbd. Is there a ready expression / constraint for "point is on arc"?

...
//solver.addConstraint(new Constraint(new Expression([-1, right], left, width), Operator.Eq));  // MODEL

// line(arc-pink.mid, line-pink.end) is perpendicularWith arc-green

...

// [arc-pink.start, arc-pink.end] are symmetricalOver line(arc-pink.mid, line-pink.end))

...

//arc-pink.r is fixed
arcPinkR.isFixed();

//line(arc-pink.mid, line-pink.end).length is fixed

// Solve the constraints
solver.updateVariables();

console.log("Figured angle to be:", angleDeg.value())

// Steer the angle
angleDeg.setValue(40)
solver.updateVariables()

console.log("Moved to:", {
  linePinkEnd: `[ ${linePinkEnd[0].value()}, ${linePinkEnd[1].value()} ]`
})


//---
// Functions that make it happen

function createVarAngle(deg) {  // (num) => Variable
  const v = new Variable();
  solver.suggestValue(v, deg);
}

function createVarDist(dist) {  // (num) => Variable
  const v = new Variable();
  solver.suggestValue(v, deg);
}

function createVarP([x,y]) {    // ([num,num]) => [Variable, Variable]
  return [
    createVarDist(x),
    createVarDist(y)
  ]
}

//const left = new Variable();
//solver.addEditVariable(left, Strength.strong);
//solver.suggestValue(left, 100);

function midPointOfArc(start, end, r, startDeg) {   // (...) => [Variable, Variable]

  // tbd. describe the relationship of mid-point on the arc with the arc parameters (so that changes can happen both
  //    ways).
  //
  throw new
}
