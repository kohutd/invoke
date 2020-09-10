# Invoke

No REST, no GraphQL.

## Basics
There is a Type. There is a Method.
You invoke a Method. It returns a Type.

Old style:
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
```

Functional style:
```javascript
function Hex(data) {
    return useRules({
        hex: Str,
    }, data);
}

function Hex2Dex(params) {
    const {hex} = useRules({
        hex: Str,
    }, params);
    
    return Hex({dec: Number(`0x${hex}`)});
}
```

rest:
```javascript
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