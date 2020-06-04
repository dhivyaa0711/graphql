const { gql } = require('apollo-server-express');
const userTypeDefs = require('./user');
const taskTypeDefs = require('./task');
const postTypeDefs = require('./post')

const TypeDefs  = gql`
    scalar Date
    
    type Query{
        _ : String
        getPost(id: ID!): PostResponse
        getAllPosts: PostResponse
    }
    type Mutation{
        _ : String
        createPost(post: createPostInput): PostResponse
        removePost(photoId:ID!, filename: String): Response
        likeUnlikePost(post: PostInput): PostResponse
        upsertComment(post: PostInput): PostResponse
        removeComment(post: PostInput): PostResponse
    }
`;

module.exports = [
    TypeDefs,
    userTypeDefs,
    taskTypeDefs,
    postTypeDefs
];