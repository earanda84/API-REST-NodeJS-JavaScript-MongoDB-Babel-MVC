const handleHttpResponse = (res, statusCode, response) => {

    res.status(statusCode)
    res.send({
        response
    })
}


export {
    handleHttpResponse
}