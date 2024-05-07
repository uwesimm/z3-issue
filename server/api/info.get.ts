import { z } from 'zod'
import type { H3Event } from 'h3'
import {init} from 'z3-solver';

const userSchemaBody = z.object({
    vlnv: z.string()
})

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
