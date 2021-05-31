
const artModel = require('../model/Art')


// post create new data
const postFunction = async (req, res) => {
    const { title, thumbnail, artist_name, description } = req.body;
    const slug = title.toLowerCase().split(' ').join('-')

    artModel.find({ slug: slug }, (err, data) => {
        if (data.lenght > 0) {
            res.send('data already exists')
        } else {
            const newArtModel = new artModel({
                title: title,
                slug: slug,
                thumbnail: thumbnail,
                artist_name: artist_name,
                description: description,
            })
            newArtModel.save();
            res.send('Item added')
        }
    });
}

// get the data from mongodb 
const getFunction = async (req, res) => {


    artModel.find({}, (err, data) => {

        res.send(data)

    })
}

const putFunction = async (req, res) => {
    const { description } = req.body
    const slug = req.params.slug
    // console.log('in update 1')
    artModel.find({ slug: slug }, (err, data) => {
        // console.log('in update 2')
        if (err) {
            // console.log('in update 3')
            res.send(err)
        } else {
            // console.log('in update 4')
            // console.log(data)
            data[0].description = description;
            data[0].save();
            artModel.find({}, (err, data) => {
                res.send(data)
            })
        }
    })
}
const deleteFunction = async (req, res) => {
    const slug = req.params.slug
    console.log('delete 1')
    artModel.remove({ slug: slug }, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            console.log('delete 2')

            artModel.find({}, (err, data) => {
                res.send(data)
            })
        }
    })
}
module.exports = {
    postFunction,
    getFunction,
    putFunction,
    deleteFunction
}