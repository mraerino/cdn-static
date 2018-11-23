import * as AWS from 'aws-sdk';

const main = async () => {
    console.log("Hello World!");

    // Create an S3 client
    const s3 = new AWS.S3({endpoint: 's3.wasabisys.com'});

    // Create a bucket and upload something into it
    const bucketName = 'node-sdk-sample';
    const keyName = 'hello_world.txt';

    await s3.createBucket({Bucket: bucketName}).promise()

    const params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    await s3.putObject(params).promise()
}

if (require.main === module) {
    main().catch(e => console.error("Failed: ", e))
}

export default main
