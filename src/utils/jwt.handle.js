import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "SecreT.001";


// GENERATE TOKEN
const generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: "1h" });
};

// VERIFY TOKEN
const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET, (error, decoded) => {
        
        if(error) return error.message;

        return decoded;
    })
};

export {
    generateToken,
    verifyToken
}





