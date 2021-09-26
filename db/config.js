const mongoose = require('mongoose');

const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.DB_CONECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database conection successfull');


    } catch (error) {
        console.log('Error database conection', error);
        throw new Error('Error database conection');
    }
}

module.exports = { dbConnection };