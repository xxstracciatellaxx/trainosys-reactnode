import express from 'express'
import mongoose, { Schema } from 'mongoose'
// import User from '../models/User.js'


const router = express.Router()

const userSchema = new Schema({
  first_name: String,
  last_name: String
})

const User = mongoose.model('User', userSchema)

router.get('/', (req, res) => {
    res.status(200).json({
        data: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              },
              {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
              },
              {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
              },
        ]
    })
})

router.post('/user', async (req, res) => {
  console.log("Request Body", req.body);

  if (req.body === undefined || null) {
    return res.status(400).json({message: "Bad request"})
  }

  try {
    const newUser = new User(req.body);
    const insertNewUser = await newUser.save();

    res.status(201).json({message: "User Created", data: insertNewUser})

  } catch (error) {
    res.status(400).json({message: 'User not created'})
  }
})

//DELETE
router.delete('/user/:id', async (req, res) => {
  console.log(req.params);
  try {
    const{ id } = req.params
    const user = await User.findById(id);

if (user) {
  const deletedUser = await User.findByIdAndDelete(id)
  res.status(204).json({message: "user deleted successfully!!", data: deletedUser})
} else {
  res.status(404).json({message: "user deleted successfully!!"})
}
  } catch (error) {
   console.error('Error deleting data') 
   res.status(500).json({message: "Internal Server Error"})
  }
})



export default router