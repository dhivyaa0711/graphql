const { gql } = require('apollo-server-express');

// GraphQL schema
module.exports  = gql(`
    type Response {
        code: Int
        success: Boolean
        message: String
    }
    type PostResponse {
        code: Int!
        success: Boolean
        message: String
        lastEvaluatedKey: String
        post: [Post]
    }
    type Post {
        postId: ID
        url: String
        key: String
        likes: Likes
        comments: [Comments]
        caption: String
        createdDate: String
        createdBy: Employee
    }
    type Comments {
        id: ID
        commentStatement: String
        commentBy: Employee
    }
    input createPostInput {
        file: Upload
        caption: String
        createdBy: EmployeeInput
    }
    input PostInput {        
        postId: ID!
        url: String
        key: String
        likes: LikeInput
        comment: CommentInput
        caption: String
        createdBy: EmployeeInput
    }
    input CommentInput {
        id: ID
        commentStatement: String
        commentBy: EmployeeInput
    }
    input LikeInput {
        employee: EmployeeInput
    }
    type Likes {
        count: Int!
        employee: [Employee]
    }
    type Employee {
        id: ID
        firstName: String
        lastName: String
    }
    input EmployeeInput {
        id: ID!
        firstName: String
        lastName: String
    }
`);
