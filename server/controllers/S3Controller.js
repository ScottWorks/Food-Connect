const aws = require('aws-sdk');
const axios = require('axios');
require('dotenv').load();

const {
    ACCESSKEYID,
    SECRETACCESSKEY,
    S3BUCKET,
    S3REGION
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
        const {signedURL, file, fileType} = req.body;
        const dbInstance = req.app.get('db');
        const {baksetID} = req.params
        const aws_path = `https://${S3REGION}.amazonaws.com/${S3BUCKET}/${file}`

        const options = {
            headers: {
                "Content-type": fileType
            }
        };

        // This will upload file to Amazon AWS S3 and simulatenously update DB for AWS Path
        axios.put(signedURL, file, options).then(result=> {
            dbInstance.updateAWS([basketID, aws_path]).then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                console.log(`Error while updating DB for AWS Path: ${err}`);
                res.sendStatus(500);
            })
        })
    }

}