module.exports = {

    mwEditUser : (req, res, next) => {
        console.log(req.method, req.originalUrl)
        next()
    },

    mwDeleteUser : (req, res, next) => {
        console.log(req.method, req.originalUrl)
        next()
    },

    mwEditBook : (req, res, next) => {
        console.log(req.method, req.originalUrl)
        next()
    },

    mwDeleteBook : (req, res, next) => {
        console.log(req.method, req.originalUrl)
        next()
    }
}