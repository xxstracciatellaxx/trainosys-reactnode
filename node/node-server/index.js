// import {createServer} from 'http'

// const server = createServer ( (req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end('Hello World! \n');
// }) 

// const PORT = 4000;

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`)
// });
import express from 'express'
import cors from 'cors'
import logRequest from './middlewares/logginMiddleware.js';
import userRouter from './routes/userRouter.js'
import connectDB from './connectDatabase.js';

const app = express()
const PORT = 4000;

await connectDB()

app.set('port', PORT)
app.use(logRequest)
app.use(express.json())
app.use(cors())
app.use('/api/v1/users', userRouter)
// app.use('/api/profile', profileRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello from the server side'})
})

app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`)
})