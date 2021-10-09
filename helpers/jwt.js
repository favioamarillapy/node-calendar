var jwt = require('jsonwebtoken');


const jwtGenerate = (id, name) => {

    return new Promise((resolve, reject) => {

        const payload = { id, name };

        jwt.sign(
            payload, process.env.JWT_PRIVATE_KEY,
            { expiresIn: '2h' },
            (error, token) => {
                if (error) {
                    reject('Error creating token')
                }

                resolve(token)
            }
        )
    });

}

module.exports = { jwtGenerate };