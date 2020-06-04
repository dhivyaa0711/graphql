# GraphQL Application

This is a graphQL Application where we can <br/> 
            1. create a post with a picture <br/> 
            2. like or unlike the post <br/> 
            3. can add/edit/remove a comment from the post. <br/>
 
## Installation
### ...........For Photoposting-Mongo Branch............

To run the app, follow the below steps:

1. You have to create an s3 bucket in aws console<br/>
    i.   Login or Signup to `aws console`<br/>
    ii.  search for  `s3` in services<br/>
    iii. create an s3 bucket with the unique name and a specific region<br/>
    iv.  Goto `My Security Credentials` which is in dropdown of your username<br/>
    v.   click on `access keys` and generate a new key and download the rootkey file
2. Add the credentials to the credentials file. Goto path
    ```shell
        C:\Users\userid\.aws\credentials
    ```
    and add the credentials in the following manner
    ```shell
        [default]
        aws_access_key_id = fakeId
        aws_secret_access_key = fakeKey
        [awss3]
        aws_access_key_id = ----key id prsent in downloaded file-----
        aws_secret_access_key = ----access key--------
    ```
3. Go to `package.json` in graphql application and replace ``photoposting`` in line number 20 with `YOUR S3 BUCKET NAME`
4. To run the graphql server run the below commands in the project folder
    ```bash
        npm install
    ```

    and 

    ```bash
        npm start
    ```


# Using postmanclient collection

1. To run the APIs, import the postmanclient collection from the below link `You need recent version of postman client to be installed in your system i.e ^7.2`<br/>

    Note: To import the collection in postman client Goto <br/>
        Import(on top left of postmanclient) -> link <br/>
        paste the below url and click `continue`. you should be able to see the collection named `fitness app` in collections tab on the left.

    ```shell
        https://www.getpostman.com/collections/2cc8f71c1d9b222d0df6
    ```
    i. Post a picture: <br/>
        You should be able to see 3 key value pairs in `body->form data`... <br/>
    ```shell
            i. For value of operations: You can change the creator id
            ii.For picture : Add a picture(`of size less than 3MB`) from local system
    ```
        Response : you will get a response as below
    ```shell
            {
                "data": {
                    "createPost": {
                        "code": 201,
                        "success": true,
                        "message": "Post uploaded successfully",
                        "post": [
                            {
                                "id": "700aa3d7-c8f3-487b-bb4e-1672fb762074",
                                "url": "https://my1bucket2.s3.ap-south-1.amazonaws.com/uploads/1001/pic5.jpg"
                            }]}}}
    ```
    ii. Get post by id:<br/>
        You should be able to see a query in `body -> graphql`...Add the previous post->postId which you have got as a response for posting a picture.<br/>
        Response : you will be getting a post object with all the details<br/>
    iii. Like or unlike a post:<br/>
        You should be able to see a query in `body -> graphql`...Add the previous post->postId which you have got as a response for posting a picture.<br/>
        Response : you will get a response as below  and if you hit for same post id twice it is trated as unlike and gets removed from likes
    ```shell
            {
                "data": {
                    "likeUnlikePost": {
                        "code": 200,
                        "success": true,
                        "message": "Post liked/unliked",
                        "post": [
                            {
                                "id": "27e365cb-caa4-47d0-9c6d-67357aa25a4d",
                                "likes": {
                                    "count": 1,
                                    "employee": [
                                        {
                                            "id": "10002"
                                        }]}}]}}}
    ```
    iv. Add comment to a post:<br/>
    You should be able to see a query in `body -> graphql`...Add the previous post->postId which you have got as a response for posting a picture.<br/>
        Response : you will get a response as below
    ```shell
            {
                "data": {
                    "upsertComment": {
                        "code": 200,
                        "success": true,
                        "message": "Comment saved successfully ",
                        "post": [
                            {
                                "id": "27e365cb-caa4-47d0-9c6d-67357aa25a4d",
                                "comments": [
                                    {
                                        "id": "829d7f08-09bc-4590-90d8-4740bddc09be",
                                        "commentStatement": "!",
                                        "commentBy": {
                                        "firstName": "shravyaa"
                                        }}]}]}}}
    ```
    v.Get all posts with id:<br/>
    You should be able to see a query in `body -> graphql`...<br/>
        Response : you will get all the ids of posted pictures<br/>
    vi.Remove a comment:<br/>
    You should be able to see a query in `body -> graphql`...Add the previous post->postId which you have got as a response for posting a picture and the comment->id which you have got after adding the comment.<br/>
        Response : you will get the response like this
    ```shell
            {
                "data": {
                    "removeComment": {
                        "code": 200,
                        "success": true,
                        "message": "Comment removed successfully",
                        "post": [
                            {
                                "comments": []
                            }]}}}
    ```
    vii. Remove a Post: <br/>
    You should be able to see a query in `body -> graphql`...Add the creatorid(if changed in posting a picture) and in the place of 1009 in `uploads/1009/gym.jpg` mention the id of the creator of post and mention the name of the file.
        Response: you will get the response like this
    ```shell
                {
                    "data": {
                        "removePost": {
                            "code": 200,
                            "success": true,
                            "message": "Post deleted successfully"
                        }}}
    ```
    viii. Get all posts with all details:<br/>
    You should be able to see a query in `body -> graphql`...<br/>
    Response : you will get all the details of posted pictures<br/>
    ix. Signup:<br/>
    You should be able to see a query in `body -> graphql`...<br/>
    Insert credentials and signup
    x.Login:
    You should be able to see a query in `body -> graphql`...<br/>
    Insert credentials and Login