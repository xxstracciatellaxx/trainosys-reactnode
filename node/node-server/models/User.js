import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    first_name: String,
    last_name: toString
})

module.exports = mongoose.model('User', userSchema)