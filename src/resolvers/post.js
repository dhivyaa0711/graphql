
// resolver
module.exports = {
    Query: {
        getPost: async (_, args, { dataSources }) => {
            const response = await dataSources.postService.getPost(args.id);
            return response;
        },
        getAllPosts: async (_, args, {dataSources}) => {
            const response = await dataSources.postService.getAllPosts();
            return response;
        },
    },
    Mutation: {
        createPost: async (_, args, {dataSources}) => {
            const { post } = args;            
            const response = await dataSources.postService.createPost(post);
            return response;
        },
        removePost: async (_, args, {dataSources}) => {
            const { photoId, filename } = args;
            const response = await dataSources.postService.removePost(photoId, filename);
            return response;
        },
        likeUnlikePost: async (_, args, {dataSources}) => {
            const { post } = JSON.parse(JSON.stringify(args));
            const response = await dataSources.postService.likeUnlikePost(post);
            return response;
        },
        upsertComment: async (_, args, {dataSources}) => {
            const { post } = JSON.parse(JSON.stringify(args));
            const response = await dataSources.postService.upsertComment(post);
            return response;
        },
        removeComment: async (_, args, {dataSources}) => {
            const { post } = JSON.parse(JSON.stringify(args));
            const response = await dataSources.postService.removeComment(post);
            return response;
        }
    }
};