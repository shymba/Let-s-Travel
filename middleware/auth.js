let auth = require('../controlers/auth');

function checkAuth(req, resp, next) {
    let token = req.cookies['auth_token'];
    if(token && auth.checkToken(token)) {
        next();
    } else {
        resp.status(400);
        resp.resp('Not authorized');
    }
}

module.exports = checkAuth;