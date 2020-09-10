function expressInvoke(props) {
    return (req, res, next) => {
        next();
    };
}

export default expressInvoke;