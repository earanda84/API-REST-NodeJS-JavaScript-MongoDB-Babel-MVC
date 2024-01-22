import { hash, compare } from "bcryptjs";

const encryptPassword = async (password) => {

    const salt = 10;
    return await hash(password, salt);
}

const comparePassword = async(password, hashPassword) => {

    return await compare(password, hashPassword);
}


export {
    encryptPassword,
    comparePassword
}