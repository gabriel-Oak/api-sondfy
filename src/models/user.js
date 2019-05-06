const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function() {
    const schema = new Schema({
        name:{
            type: String,
            required: true,
            trim: true,
        },
        user:{
            type: String,
            required: true,
            trim: true,
            required: true,
            index: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
        },
        playlists:[{
            type: String
        }]
    });

    return mongoose.model('Usuario', schema, 'usuarios');
}
