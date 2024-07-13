# z3 issue with nuxt3

## to start
```
pnpm install
```

## run a test to see z3 is operational
```
pnpm test
```

## see it working in dev mode
```
pnpm dev
```

and issue the query 
```
curl http://localhost:3000/api/info
```
results in 
`sat`

building for production using `pnpm build` unfortunately results into a missing `z3-solver` that can be already seen because `.output/server/node_modules` does not contain `z3-solver`

important: you must leave the project as otherwise the module `z3-solver` gets loaded via node from the source project. 

```
cd /some/where/else
cp /project/z3_issue/.output .
node .output/server/index.mjs
```
and then run the same curl command as above. that results in 
```
➜  temp00 node .output/server/index.mjs
Listening on http://[::]:3000
[nuxt] [request error] [unhandled] [500] Cannot find module 'z3-solver'
Require stack:
- /Users/uwes/src/mixed/temp00/.output/server/index.mjs
  at Module._resolveFilename (node:internal/modules/cjs/loader:1142:15)  
  at Module._load (node:internal/modules/cjs/loader:983:27)  
  at Module.require (node:internal/modules/cjs/loader:1230:19)  
  at require (node:internal/modules/helpers:179:18)  
  at ./.output/server/chunks/routes/api/info.get.mjs:1:338  
  at ModuleJob.run (node:internal/modules/esm/module_job:222:25)  
  at async ModuleLoader.import (node:internal/modules/esm/loader:323:24)  
  at async Object.handler (./.output/server/chunks/runtime.mjs:1:41139)  
  at async Server.<anonymous> (./.output/server/chunks/runtime.mjs:1:44287)
^C%   ```