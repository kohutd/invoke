class Type {
    constructor(data) {
        this._data = data;
        this._renderedData = this.render(this._data);
        this.props = {};
    }

    render(data) {
        return data;
    }

    toJSON() {
        return this._renderedData;
    }

    static make(data) {
        return new this(data);
    }

    static collection(data) {
        return new TypeCollection(data, this);
    }
}

export default Type;