// return a fucntion that catch the async error
module.exports = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    }
}