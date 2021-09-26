

const sendSuccess = (res, message, data = null) => {

    return res.status(200).json({
        ok: true, message, data
    });
}

const sendError = (res, message, error = null) => {

    return res.status(400).json({
        ok: false, message, error
    });
}

module.exports = { sendSuccess, sendError };