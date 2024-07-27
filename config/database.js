const mongoose = require('mongoose');

exports.connect = () =>{
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB is connected Successfully");
    })
    .catch((err) => {
        console.log("DB connection ISSUE");
        console.error(err);
        process.exit(1);
    });
};
