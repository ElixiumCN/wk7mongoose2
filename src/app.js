require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs") 

const { createMovie, listMovies } = require("./movie/movieFunctions")

const app = async (yargsObject) => {
    try {
        if(yargsObject.add) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            console.log(await listMovies())
        } else if (yargsObject.list) {
            console.log(await listMovies())
        }
        else {
            console.log("incorrect command")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        await mongoose.disconnect();
    }
}

app(yargs.argv)

// node app.js --list
// node app.js --add --title Spiderman --actor "Peter Parker"
// node app.js --add --title --Superman --actor "John Smith"