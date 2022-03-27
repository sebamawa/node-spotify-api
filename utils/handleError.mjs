const handleHttpError = (res, message = 'Algo sucedio', codeHttp = 403) => {
    res.status(codeHttp);
    res.send({error: message});
}

export { handleHttpError };