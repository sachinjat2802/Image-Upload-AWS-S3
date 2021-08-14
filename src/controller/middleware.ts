import AWS from "aws-sdk"
import fs from "fs"



const AWSCredentials = {
    accessKey: process.env.AWS_ACCESS_KEY_ID,
    secret: process.env.AWS_SECRET_KEY,
    bucketName: process.env.AWS_BUCKET_NAME,

};

const s3 = new AWS.S3({
    accessKeyId: AWSCredentials.accessKey,
    secretAccessKey: AWSCredentials.secret
});

export const uploadToS3 = (fileName: any) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params: any = {
        Bucket: AWSCredentials.bucketName,
        Key: fileName,
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function (err: any, data: any) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadToS3("file.jpg");