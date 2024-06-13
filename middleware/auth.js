//Stops users that have not logged in getting to pages they are not meant to
//Gets them to login, and then will redirect back to the page they wanted to go to via storing the requested url in the current session

function ensureAuthenticated(req, res, next) {
    if (req.session && req.session.email) {
        return next();
    } else {
        req.session.returnTo = req.originalUrl
        res.redirect('/login');
    }
}

module.exports = ensureAuthenticated;