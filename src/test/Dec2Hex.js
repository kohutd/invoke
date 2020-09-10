import Method from "../Method";
import Type from "../Type";
import {Int, Str} from "../rules";

class Hex_Type extends Type {
    params = {
        hex: Str,
    };
}

class Dec2Hex_Method extends Method {
    params = {
        dec: Int,
    };

    handle(params) {
        return Hex_Type.make({
            hex: 123,
        });
    }
}

export default Dec2Hex_Method;