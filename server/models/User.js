const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "basic" },
    profile: {
        riskAppetite: String,
        investmentGoals: String,
        portfolioHistory: Array,
        savedStocks: Array
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
