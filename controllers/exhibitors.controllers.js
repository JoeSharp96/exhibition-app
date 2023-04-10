const Exhibitor = require('../models/exhibitors');

// Create new account
exports.create = async function (req, res) {
    let newExhibitor = new Exhibitor({
        userCredentials: {
            username: req.body.username,
            password: req.body.password,
        },
        booth: {
            published: false
        }
    });

    try {
        await newExhibitor.save();
    } catch (err) {
        console.error(err);
    };
};

// Get all exhibitors
exports.getExhibitors = async function (req, res) {
    try {
        const exhibitors = await Exhibitor.find({});
        return exhibitors;
    } catch (err) {
        res.status(500).send({message: "Error connecting to database, please try again later"});
        console.error(err);
    };
};

// Get published exhibitors
exports.getPublished = async function (req, res) {
    try {
        const exhibitors = await Exhibitor.find({"booth.published": true});
        return exhibitors;
    } catch (err) {
        res.status(500).send();
        console.err(err);
    }
}

// Get exhibition booth
exports.getBooth = async function (req, res) {
    try {
        const obj = await Exhibitor.find({'userCredentials.username': req.username});
        const boothContent = obj[0].booth
        return boothContent
    } catch (err) {
        res.status(500).send();
        console.err(err)
    }
}

// Update exhibitor booth
exports.updateBooth = async function (req, res) {
    const booth = req.body;
    try {
        await Exhibitor.findOneAndUpdate({'userCredentials.username': req.username}, {$set: {
            "booth.boothTitle": booth.boothTitle,
            "booth.boothNumber": booth.boothNumber,
            "booth.biography": booth.biography,
            "booth.logoUrl": booth.logoUrl,
            "booth.contactInfo.contactName": booth.contactInfo.contactName,
            "booth.contactInfo.contactEmail": booth.contactInfo.contactEmail,
            "booth.website": booth.website,
            "booth.article.articleTitle": booth.article.articleTitle,
            "booth.article.articleUrl": booth.article.articleUrl,
            "booth.published": booth.published
        }});
        res.send({message: "Booth updated"})
    } catch (err) {
        res.status(500).send();
        console.error(err)
    }
}