const BaseRepository = require('../repository/BaseRepository')
class PostRespository extends BaseRepository {
    constructor(model) {
        console.log("modell..",model)
        super('post', new model());        
    }
}

module.exports = PostRespository;