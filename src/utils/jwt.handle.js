import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "SecreT.001";


// GENERATE TOKEN
const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "60s" });
};

// VERIFY TOKEN
const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET, (error, decoded) => {

        if (error) return { error: error.message };
        // console.log(error)
        return decoded;
    })
};

export {
    generateToken,
    verifyToken
}





