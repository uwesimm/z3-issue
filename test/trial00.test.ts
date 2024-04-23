
import { expect, test } from 'vitest'
import * as z3 from "z3-solver";

test('solver testing', async () => {
    const { Context } = await z3.init();

    const { Solver, Int, Function, Implies, Not } = new Context('main');
    const solver = new Solver();

    const sort = Int.sort();
    const x = Int.const('x');
    const y = Int.const('y');
    const g = Function.declare('g', sort, sort);
    const conjecture = Implies(x.eq(y), g.call(g.call(x)).eq(g.call(y)));
    solver.add(Not(conjecture));
    const result = await solver.check()
    console.log('result==', result)
    expect(result).toStrictEqual('sat')
})
