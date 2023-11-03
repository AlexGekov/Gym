exports.routeGuard = (req, res, next) => {
    req.user ? next() : res.redirect('/users/login')
}

exports.loggedInRG = (req, res, next) => {
    req.user ? res.redirect('/404') : next()
}