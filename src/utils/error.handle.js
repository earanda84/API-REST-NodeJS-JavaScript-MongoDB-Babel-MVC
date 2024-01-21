
const handleHttpError = (res, message, error ) => {

    res.status(500)
    res.send({
        message,
        error: error.message
    })
}

export {
    handleHttpError
}