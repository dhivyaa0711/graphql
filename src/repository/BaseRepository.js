class BaseRepository {
    constructor(table, model) {
        this.table = table;
        this.model = model;
    }
    async get(params) {
        try {
            const response = await this.model.find(params)
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = BaseRepository;