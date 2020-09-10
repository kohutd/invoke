export default {
    Null: "Null",
    Str: "Str",
    Int: "Int",
    Max: function (max) {
        return (context, value) => {
            if (context.is(this.Str)) {
                return value.length <= max;
            }

            return value <= max;
        };
    },
    Min: function (min) {
        return (context, value) => {
            if (context.is(this.Str)) {
                return value.length >= min;
            }

            return value >= min;
        };
    },
};