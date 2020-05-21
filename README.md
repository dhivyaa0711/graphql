# GraphQL Application

This is a graphQl Apllication where we can create a post with a picture, like or unlike the post, can add/edit/remove a comment from the post.

## Installation

To run the app, follow the below steps:

1. If you have local dynamoDB installed in your system, Run the server using
    ```shell
     java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
    ```
    If you want to run on different port mention the port number in endpoint of file
        `src -> utils -> DynamoDBCLient.js`
    and run the command with same port number <br/>for example if the mentioned port is 9000, then use the bellow command
    ```shell
        java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb -port 9000
    ```
2. If you do not have dynamodb setup locally then follow these step to setup<br/>
    i. Install AWS CLI from link: 
    ```shell
        https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
    ```
    ii. Check if AWS CLI is installed in your system with the following commands
    ```shell
        aws --version    (or)    /usr/local/bin/aws --version
    ```
    iii. Configure AWS using `aws configure` command from CMD. <br/>Give any key, id, aws region(available in the below document) and output as json<br/>
    iv. Download dynamodb local and follow the steps given here to start dynamodb locally-<br/>
    ```shell
        https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
    ```
    v. After setting up db and running jar file, you should be able to view the dynamodb shell on
    ```shell
        http://localhost:8000/shell
    ```
    vi. Paste the below code in editor and click `run`(play button)<br/>
    ```shell
                var params = {
                TableName: 'post',
                KeySchema: [ 
                    { 
                        AttributeName: 'id',
                        KeyType: 'HASH',
                    }
                ],
                AttributeDefinitions: [ 
                    {
                        AttributeName: 'id',
                        AttributeType: 'S', 
                    }
                ],
                ProvisionedThroughput: { 
                    ReadCapacityUnits: 1, 
                    WriteCapacityUnits: 1, 
                }
                };
                dynamodb.createTable(params, function(err, data) {
                    if (err) ppJson(err); 
                    else ppJson(data); 
                });
    ```

3. Now you have to create an s3 bucket in aws console<br/>
    i.   Login or signup to aws console<br/>
    ii.  search for  `s3` in services<br/>
    iii. create an s3 bucket with the unique name and a specific region<br/>
    iv.  Goto `My Security Credentials` which is in dropdown of your username<br/>
    v.   click on `access keys` and generate a new key and download the rootkey file
4. Add the credentials to the credentials file. Goto path
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
5. Go to `package.json` in graphql application and replace ``photoposting`` in line number 20 with `YOUR S3 BUCKET NAME`
6. To run the graphql server run the below commands in the project folder
    ```bash
        npm install
    ```

    and 

    ```bash
        npm start
    ```

7. To run the apis, import the postmanclient collection from the below link `You need recent version of postman client to be installed in your system i.e ^7.2`
    ```shell
        https://www.getpostman.com/collections/2cc8f71c1d9b222d0df6
    ```
->In post a picture, inside body add a picture from your local computer as a `value` for `key=picture`<br/>
->In `get a post by id`, `add comment to a post`, `like/unlike apost`, `remove a post`, `remove a comment` we need the id of the post which we have created<br/>
->In `remove a comment` you have to mention the if of the comment additionally<br/>