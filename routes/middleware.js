let jwt = require('jsonwebtoken');
const exhibitorControllers = require('../controllers/exhibitors.controllers');

// Stores JWT token when user logs in. When app refreshed, token is removed.
let token;

// Generate JWT token
async function getJWT(req, res, next) {
    const exhibitors = await exhibitorControllers.getExhibitors(req, res);
    const usr = req.body.username;
    const psw = req.body.password;
    for (let i = 0; i < exhibitors.length; i++) {
        if(usr === exhibitors[i].userCredentials.username && psw === exhibitors[i].userCredentials.password) {
            req.jwt = jwt.sign(
                {
                    username: usr,
                    password: psw
                },
                "secretKey"
            );
            break;
        };
    };
    if (req.jwt) {
        token = req.jwt;
        next();
    } else {
        res.status(404).send({message: "Either the username or password were entered incorrectly"});
    };
    
};

// Checks if JWT token is valid
function checkJWTToken(req, res, next) {
    if (token) {
        jwt.verify(token, "secretKey", function(error, data) {
            if (error) {
                res.status(403).send({message: "Invalid token"})
            } else {
                req.username = data.username;
                next();
            };
        });
    } else {
        res.status(403).send({message: "Token missing"})
    };
};

// Get to do list
async function getBooth(req, res, next) {
    const booth = await exhibitorControllers.getBooth(req, res);
    req.booth = booth
    next();
}

// Checks password meets requirements
function passwordVerification(req, res, next) {
    if (
        req.body.password === req.body.confirmPassword && 
        req.body.password.length >= 6
    ) {
        next()
    } else if (req.body.password.length < 6) {
        res.status(403).send({message: "Passwords must be longer than 6 characters."});
    } else {
        res.status(403).send({message: "Passwords do not match."})
    }
}

// Checks if username is unique
async function checkUsername(req, res, next) {
    const exhibitors = await exhibitorControllers.getExhibitors(req, res);
    const usr = req.body.username;
    let match = false

    try {
        for (let i = 0; i < exhibitors.length; i++) {
            if (usr === exhibitors[i].userCredentials.username) {
                match = true
                res.status(403).send({message: "Username already exists."})
                throw "Duplicate email"
            };
        };
    } catch (err) {
        console.error(err)
    }
    if (!match){
        next();
    }
};

// Gets list of all exhibitors
async function getPublishedList(req, res, next) {
    const exhibitors = await exhibitorControllers.getPublished(req,res);
    const boothData = exhibitors.map((exhibitor) => {
        return exhibitor.booth;
    });
    req.booths = boothData;
    next()
}

// Creates list of all published logos
function getPublishedLogos(req,res,next) {
    const exhibitorList = req.booths;
    req.logos = exhibitorList.map((booth) => {
        return(
            {
                boothTitle: booth.boothTitle,
                logoUrl: booth.logoUrl
            }
        )
    })
    next();
}

// Clear JWT
function clearJWT(req, res, next) {
    token = undefined;
    next();
}

module.exports = {
    checkUsername,
    passwordVerification,
    getJWT,
    checkJWTToken,
    getBooth,
    getPublishedList,
    clearJWT,
    getPublishedLogos
}