import type { H3Event } from 'h3'
import {Z3_string} from 'z3-solver'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { init } = require('z3-solver')

async function callback(event: H3Event) {
    const { Context } = await init();
    const { Solver, Int, And } = Context('main');

    const x = Int.const('x');

    const solver = new Solver();
    solver.add(And(x.ge(0), x.le(9)));
    const result = await solver.check()
    return result
}

export default defineEventHandler(callback)
