
const mongoose=require("mongoose");
const Schema= new mongoose.Schema;

// let userSchema = new mongoose.Schema({
//     fullName: {
//         type: String,
//         required: 'Full name can\'t be empty'
//     },
//     email: {
//         type: String,
//         required: 'Email can\'t be empty',
//         unique: true
//     },
//     password: {
//         type: String,
//         required: 'Password can\'t be empty',
//         minlength: [4, 'Password must be atleast 4 character long']
//     }
// });

let productSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    }
  })
  mongoose.model('productSchema',productSchema)