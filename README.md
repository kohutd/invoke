# Invoke

No REST, no GrapQL.

## Basics
There is a Type. There is a Method.
You invoke a Method. It returns a Type.

```javascript
class Hex extends Type {
    params = {
        hex: Str,
    };
}

class Dec2Hex extends Method {
    params = {
        dec: Int,
    };
    
    handle(params) {
        return Hex.make({
            hex:params.dec.toString(16)
        });
    }
}

const methods = {
    "dec2hex": Dec2Hex,
};

const app = require("express")();
const invoke = require("invoke-express")({
    methods,
});

app.use(invoke);

app.listen(3000);

// curl -X POST 'http://localhost:3000/invoke/dec2hex' \
//      --data '{"dec": 123}' \
//      -H 'Content-Type: application/json'
```