const customHeader = (req, res, next) => {
    
    //const apiKey = req.headers.api_key;
    //console.log(req.headers);
    //console.log(apiKey);
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === "api-publica-123") {
            next();
        } else {
            res.status(403);
            res.send({error: "API_KEY_NO_ES_CORRECTA"});
        }
    } catch (e) {
        res.send(403);
        res.send({error: 'ALGO_OCURRIO_EN_EL_CUSTOM_HEADER'});
    }
}    

export { customHeader };