const mongoose = require("mongoose");

async function main() {
 try {

    mongoose.set("strictQuery", true);
    
    await mongoose.connect(
        "mongodb+srv://camila:m5SsZPw4RVYybnbs@cluster0.zwux9oi.mongodb.net/?retryWrites=true&w=majority"
    );
 } catch (error) {
    console.log(`Erro: ${error}`)
 }
}

module.exports = main