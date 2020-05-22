class BaseRepository {
    constructor(table, model) {
        this.table = table;
        this.model = model;
    }
    async get(params) {
        console.log("params..",params)
        try {
            const response = await this.model.findOne(params);
            console.log("response..", response)
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = BaseRepository;