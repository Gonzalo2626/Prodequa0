import jwt from "jsonwebtoken";
import { createError} from "../utils/error.js";

export const verifyToken = (req, res, next)=> {
    const token = req.cookies.access_token;
    if(!token) {
        throw createError(401, "You are not authenticated!");
    }
    const user = jwt.verify(token, process.env.JWT);
    if(!user) {
        throw createError(403, "Token is not valid!");
    }

    req.user = user;

    return next()
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next)
    if(req.user.id === req.params.id || req.user.isAdmin) {
        return next()
    }
}

export const verifyAdmin = (req, res, next) => {
    req.pta = 12;
    console.log('$$ req.pta 1', req.pta)
    console.log('$$ aweawe',)
    verifyToken(req, res, next)

    if(req.user.isAdmin){
        return next()
    }
}