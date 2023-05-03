/** call library jwt */
const jwt = require(`jsonwebtoken`)

/** call md5 library */
const md5 = require('md5')

/** load model of user */
const userModel = require(`../models/index`).user

exports.authentication = async (request, response) => {
    try {
        /** grab username and password */
        let params = {
            username: request.body.username,
            password: md5(request.body.password)
        }

        /** check user exist */
        let result = await userModel.findOne(
            {
                where: params
            }
        )

        /** validate result */
        if (result) {
            /** if user has exist, generate token */
            /** define secret key of jwt */
            let secretKey = 'sixnature joss'
            /** define header of jwt */
            let header = {
                algorithm: "HS256"
            }

            /** define payload */
            let payload = JSON.stringify(result)

            /** do generate token using jwt */
            let token = jwt.sign(payload, secretKey, header)

            /** give a respose */
            return response.json({
                status: true,
                token: token, 
                message: `login berhasil`
            })
        }else{
            /** if user doesn't exist */
            /** give a response */
            return response.json({
                status: false,
                message: 'invalid username or password'
            })
        }

    } catch (error) {
        return response.json({
            status: false,
            message: error.message
        })
    }
}