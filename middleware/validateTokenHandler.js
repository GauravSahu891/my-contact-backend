const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer ")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded) =>{
            if(err){
                res.status(401);
                throw new Error("User not Authorized.");
        }
        req.user = decoded.user;
        next();
        });

        if(!token){
            res.status(401);
            throw new Error("User is not Authorized or Token is missing");
        }
    }
});

module.exports = validateToken;
// const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");

// const validateToken = asyncHandler(async (req, res, next) => {
//     console.log("🔥 validateToken middleware HIT");

//     const authHeader = req.headers.authorization;
//     console.log("Authorization Header:", authHeader);

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         res.status(401);
//         throw new Error("Authorization header missing or malformed");
//     }

//     const token = authHeader.split(" ")[1];
//     console.log("Token:", token);

//     try {
//         const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//         console.log("Decoded Token:", decoded);

//         req.user = decoded.user;
//         console.log("req.user set to:", req.user);

//         next();
//     } catch (err) {
//         res.status(401);
//         throw new Error("User not authorized");
//     }
// });

// module.exports = validateToken;