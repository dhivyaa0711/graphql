# GraphQL Application

This is a graphQl Apllication where we can create a post with a picture, like or unlike the post, can add/edit/remove a comment from the post.

## Installation

To run the app, follow the below steps:

1. If you have local dynamoDB installed in your system, Run the server using
    ```shell
     java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
    ```
    If you want to run on different port mention the port number in endpoint of file
        src -> utils -> DynamoDBCLient.js
    and run the command with same port number for example if the mentioned port is 9000
    ```shell
     java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb -port 9000
    ```
2. If you do not have dynamodb setup locally then follow these step to setup<br/>
    i. install AWS CLI from link: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html<br/>
    ii. Configure AWS using "aws configure" command from CMD. Give any name, key, aws region(available in the below document) and output as json<br/>
    iii. Download dynamodb local and follow the steps given here to start dynamodb locally-<br/>
        https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html<br/>
    iv. After setting up db and running jar file, you should be able to view the dynamodb shell on
        ```shell
        http://localhost:8000/shell
        ```
3. To run the graphql server run the below commands in the project folder
    ```bash
        npm install
    ```

    and 

    ```bash
        npm start
    ```