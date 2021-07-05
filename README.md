# Solver Shootout

This is a support repo for [just-solve](https://github.com/akauppi/just-solve), for comparing geometric constraints solvers, and picking one suitable for that project.

## Shopping list 🛍

The solver should:

- should be usable from JavaScript (in browser)
- handle the following geometries:
  - point, line, arc, circle, ellipse, spline (preferably)

- have the following constraints (some of which are relations to each other):

   ||constraint|
   |---|---|
   |point|x, y|
   |line|start, end, mid, angle|
   |arc|center, r, start-angle, end-angle, startP, endP|

## Sample case

The same sample case as with `just-solve`:

<img src="./demo.svg" style="border: 1px solid lightgray;" />

**Parts**

- arc green
  - start: 50,20
  - end: 100,20
  - r: 30
  - start-angle: 56.3

- arc pink
  - start: 120,50
  - end: 120,20
  - r: 15
  - start-angle: 180

- line pink 1
  - start: 120,50
  - end: 180,65

>The last line is not needed to be defined, since SVG `z` takes care of it.

**Constraints**

- arc green is fixed
- arc pink `.mid` is on arc green (also meaning it won't travel past its start/end points)
- line from arc pink `.mid` to line pink `.end` is perpendicular to arc green
- arc pink start and end points are symmetrical over the line from arc pink `.mid` to line pink `.end`
- arc pink r is fixed
- line length of arc pink `.mid` to line pink `.end` is fixed

That should have it so that the "cone" can move (if dragged) around the green arc, but is always pointing away from it and all the visual sizes remain unchanged.

## Candidates

- [SolveSpace](https://solvespace.com/index.pl)

   - "free (GPLv3) parametric 3d CAD tool"
   - solver is (maybe) separable from the code base
   - [Rebase the emscripten port to master](https://github.com/solvespace/solvespace/issues/1037) is the ticket

- [Kiwi.js](https://github.com/IjzerenHein/kiwi.js/)

   - "Fast TypeScript implementation of the Cassowary constraint solving algorithm"
   - Cassowary's [problem domain seems to be that of rectangular layouts](https://github.com/slightlyoff/cassowary.js). Not anywhere near CAD complexity (tangents etc.). Liked this at first, but it just doesn't cut it.. :(

- [Constraints](https://github.com/Michael-F-Bryan/constraints)

  - tipped by `pkahler` of SolveSpace

- [Gecode](https://www.gecode.org)

   - "Generic Constraint Development Environment"

That should be enough that at least one of the candidates proves useful, in the JavaScript environment.


||language|ease of getting started|support/relevance|features|comments/risks|
|---|---|---|---|---|---|
|SolveSpace|C++|...|active community||+ <br />- GPL3;<br />solver not clearly separated: [#1037](https://github.com/solvespace/solvespace/issues/1037)|
|Kiwi.js|JavaScript (TypeScript)|⭐️⭐️⭐️ absolute ease! Good docs; everything worked!|...stopped in 2019?|💥🚫linear constraints only (no circles, tangents, curves)|
|Constraints|Rust|
|Gecode|C++|

