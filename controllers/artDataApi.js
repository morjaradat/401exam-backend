const superagent = require('superagent');

const ApiData = async (req, res) => {
    const url = 'https://api.artic.edu/api/v1/artworks?limit=10';

    superagent.get(url).then(i => {
        const artData = i.body.data.map(y => new ArtData(y))
        res.send(artData)
    }).catch(error => {
        console.log('==================')
        console.log(error)
        console.log('==================')
    })
}

class ArtData {
    constructor(data) {
        this.title = data.title;
        this.thumbnail = data.thumbnail.lqip;
        this.artist_name = data.artist_title;
        this.description = data.credit_line;
    }
}

module.exports = ApiData