const BaseRepository = require('../repository/BaseRepository')
class PostRespository extends BaseRepository {
    constructor(model) {
        super('post', model);
    }
}

module.exports = PostRespository;