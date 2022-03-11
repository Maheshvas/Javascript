function RunCallback(a, b, cb) {
   let add=a+b;
    return cb(add)
}

module.exports = RunCallback;
