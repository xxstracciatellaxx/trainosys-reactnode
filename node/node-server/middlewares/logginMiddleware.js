const logRequest = (req, res, next) => {
    console.log(req);
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();
    console.log(`Method [${timestamp} ${method} URL: ${url}]`)

    next ();
}

export default logRequest;