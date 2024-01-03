# Terminology

Each domain has its own vocabulary of terms, and it is important to understand what exactly they mean.

Newcomers: hope this helps

Old-timers: please correct if I got something wrong

## algebraic constraint solver

A solver that can be fed 1..n equations and it finds values to the variables that might fulfill them all.

**Examples:**

- [Michael-F-Bryan/constraints](https://github.com/Michael-F-Bryan/constraints)


## geometric constraint solver

- [Geometric constraint solving](https://en.wikipedia.org/wiki/Geometric_constraint_solving) (Wikipedia)

A solver that can be fed geometric objects, and their relations, and the solver finds parameters for the objects that fulfill the constraints.

A geometric constraints problem converts to an algebraic one.


## linear vs. non-linear

A linear solver can only work on equations that represent lines (ax + by +c = 0). This excludes circles, arcs, and splines. A non-linear solver can solve those.


