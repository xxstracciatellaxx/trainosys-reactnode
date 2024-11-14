import express from 'express'; 

const app = express();
const requestLimit = 100; 
const timeFrame = 2 * 60 * 60 * 1000;
const requestArray = []; 

const rateLimitingMiddleware = (req, res, next) => {
    const clientIp = req.ip;
    const currentTime = Date.now(); 

    const validRequests = requestArray.filter(request => {
        return currentTime - request.timestamp < timeFrame;
    });

    requestArray.length = 0; 
    requestArray.push(...validRequests); 

    const clientRequests = validRequests.filter(request => request.ip === clientIp);

    if (clientRequests.length >= requestLimit) {
        return res.status(429).send('Too Many Requests'); 
    }

    requestArray.push({
        ip: clientIp,
        timestamp: currentTime
    });

    next();
};

app.use(rateLimitingMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});