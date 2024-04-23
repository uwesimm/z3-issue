import { z } from 'zod'
import type { H3Event } from 'h3'
import * as z3 from 'z3-solver';

const userSchemaBody = z.object({
    vlnv: z.string()
})

async function callback(event: H3Event) {
    const body = await readValidatedBody(event, userSchemaBody.parse)

    const { Context } = await z3.init();
    const { Solver, Int, And } = new Context('main');

    const x = Int.const('x');

    const solver = new Solver();
    solver.add(And(x.ge(0), x.le(9)));
    const result = await solver.check()
    return result
}

export default defineEventHandler(callback)
