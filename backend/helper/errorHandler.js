function errorHandling({ code, status, message }) {
    return {
        status: code || status,
        message
    };
}
module.exports = errorHandling;


