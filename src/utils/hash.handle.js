import { hash, compare } from "bcryptjs";

const encryptPassword = async (password) => {

    const salt = 10;
    return await hash(password, salt);
}

const comparePassword = async (password, hashPassword) => {
    const verify = await compare(password, hashPassword);

console.log(verify)
    return verify
}


export {
    encryptPassword,
    comparePassword
}