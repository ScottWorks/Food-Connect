const aws = require('aws-sdk');
const axios = require('axios');
require('dotenv').load();

const {
    ACCESSKEYID,
    SECRETACCESSKEY,
    S3BUCKET
} = process.env


aws.config.update({
    accessKeyId : ACCESSKEYID,
    secretAccessKey : SECRETACCESSKEY,
})

module.exports = {

    // FUNCTION TO GET SIGN URI
    sign : (req, res) => {
        let s3 = new aws.S3();

        const {filename, filetype} = req.body

        let params = {
            Bucket : S3BUCKET,
            Key : filename,
            Expires : 60,
            ContentType : filetype,
            ACL : 'public-read'
        }

        s3.getSignedUrl('putObject', params, (err, data) => {
            if(err) {
                console.log(`Server error during Sign URI: ${err}`);
                res.sendStatus(500);
            } else {
                res.status(200).send(data);
            }
        })
    },

    upload: (req, res) => {
        // TODO:
    }

}