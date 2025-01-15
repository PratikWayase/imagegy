import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: 'Not authorized, login again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id; // Add user ID to the request body
        } else {
            return res.json({ success: false, message: 'not authorized, login again' });
        }
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export default userAuth;
