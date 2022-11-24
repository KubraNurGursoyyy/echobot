const httpStatus = require('http-status');
const responseObject = require('../helper/responseObject');
const errorHandling = require("../helper/errorHandler");
const Echo = require("../model/echo");

const createEcho = async (req, res) => {
    try {
        const inputText = req.body.text;
        console.log(inputText);

        return new Echo(inputText);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorHandling(error));
    }
};

const sendEcho = async (req, res) => {
    try {
        const echo = await createEcho(req);
        console.log(echo);
        return res.status(httpStatus.OK).send(responseObject(1,'Success',echo));
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorHandling(error));
    }
};

module.exports = {
    sendEcho
};
