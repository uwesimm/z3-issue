import {init} from 'z3-solver';

const { Context } = await init();
const { Solver, Int, And } = Context('main');

const x = Int.const('x');

const solver = new Solver();
solver.add(And(x.ge(0), x.le(9)));
const result = await solver.check()
console.log(result)