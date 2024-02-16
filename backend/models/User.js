const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    blogs: [
        {
            ref: 'Blog',
            type: mongoose.Schema.Types.ObjectId

        }
    ]

});

UserSchema.set('toJSON',{
    transform: (document,returnedObject)=>{
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    }
})
module.exports = mongoose.model('User',UserSchema);