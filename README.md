# z3 issue with nuxt3

## to start
```
pnpm install
```

## run a test to see z3 is technoically operational
```
pnpm test
```

## see the failure in nuxt3
```
pnpm dev
```

results in 
```

[9:51:56 AM]  ERROR  [worker reload] [worker init] Directory import '/Users/uwes/src/mixed/z3_issue/nuxt-app/node_modules/.pnpm/z3-solver@4.13.0/node_modules/z3-solver/build/high-level' is not supported resolving ES modules imported from /Users/uwes/src/mixed/z3_issue/nuxt-app/.nuxt/dev/index.mjs
Did you mean to import "/Users/uwes/src/mixed/z3_issue/nuxt-app/node_modules/.pnpm/z3-solver@4.13.0/node_modules/z3-solver/build/high-level/index.js"?

  Did you mean to import "node_modules/.pnpm/z3-solver@4.13.0/node_modules/z3-solver/build/high-level/index.js"?
  at finalizeResolution (node:internal/modules/esm/resolve:258:11)
  at moduleResolve (node:internal/modules/esm/resolve:924:10)
  at defaultResolve (node:internal/modules/esm/resolve:1148:11)
  at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:390:12)
  at ModuleLoader.resolve (node:internal/modules/esm/loader:359:25)
  at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:234:38)
  at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:87:39)
  at link (node:internal/modules/esm/module_job:86:36)

^C%       

```

if that would work correctly then 
```
curl -s -X POST 'http://localhost:3000/info'  -H "Content-Type: application/json" -d '{"vlnv":"a:b:c:0"}'
```

should return 'sat'
