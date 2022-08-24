const Movie = require("./movieModel") 

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.find({})
    } catch (error) {
        console.log(error)
    }
}
