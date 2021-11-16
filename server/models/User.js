const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Event = require('./Event');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,

    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
    plannedEvents: [Event.schema],
    pendingInvites: [Event.schema],
});

userSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;