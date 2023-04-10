const mongoose = require('mongoose');
let ExhibitorSchema = mongoose.Schema({
    userCredentials: {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    booth: {
        boothTitle: {
            type: String,
            required: false,
            default: ""
        },
        boothNumber: {
            type: Number,
            required: false,
            default: 0
        },
        biography: {
            type: String,
            required: false,
            default: ""
        },
        logoUrl: {
            type: String,
            required: false,
            default: ""
        },
        contactInfo: {
            contactName: {
                type: String,
                required: false,
                default: ""
            },
            contactEmail: {
                type: String,
                required: false,
                default: ""
            }
        },
        website: {
            type: String,
            required: false,
            default: ""
        },
        article: {
            articleTitle: {
                type: String,
                required: false,
                default: ""
            },
            articleUrl: {
                type: String,
                required: false,
                default: ""
            }
        },
        published: {
            type: Boolean,
            required: true
        }
    }
})

module.exports = mongoose.model('exhibitors', ExhibitorSchema);