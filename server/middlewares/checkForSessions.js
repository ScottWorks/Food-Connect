let session_id = 1;

module.exports = function(req, res, next) {
    if(!req.session.user) {
        req.session.user = {session_id: '', user_id: ''};
        req.session.user.session_id = session_id;
        session_id++;
    }
    next();
}