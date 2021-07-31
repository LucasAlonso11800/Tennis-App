const jwt = require('jsonwebtoken');

function checkAuth(token) {
    if (token) {
        try {
            const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
            return user
        }
        catch (err) {
            throw new Error(err)
        }
    }
    throw new Error("Auth token not provided")
};

module.exports = checkAuth