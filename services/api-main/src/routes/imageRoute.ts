import { Request, Response, Router } from "express"
import { AuthMiddleware } from '@/middleware/middleware'
import { uploadImage } from "@/controllers/imageController"
import { Storage } from "@google-cloud/storage"
import Multer from "multer"

const projectId = "link-d-law"
const keyFilename = `{
    "type": "service_account",
    "project_id": "link-d-law",
    "private_key_id": "edd20ab1fd8b735bcfa2a9b54e38bfc593f09e6a",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4RaUAN3F7nlEw\nPvmY4Kol2TlD9fQMeIey0CGXHP5mNPKYx0D0OQF2R9o9VmRvk9EvKS5rSGAv0gOG\nmyHQ79oCrMM0alewIdsSlK3lkRYu+v5z6i5Mz/k3yJ6vovvNphSPHi0690LkkNC2\nylFbkAFbsqE/WuFNo6fps/unUAh9FO8CMuPtZsduQCjDD2NJq/igkOHslB7+fnSp\nFVp2t5ij/h9mPBVsZM2GMUgyqYoYp1wGEEZAMlO+xTHLee9bSH/HxSev2g5SZIn+\n4BtZs0tZCGoEDn5MVe60avu3wDdjFBm73Ht4CyWYFr4zQTuRxURmwg07ovPbkob+\ns48nNC+nAgMBAAECggEAIAAQMGJwdaw/oyY8iBzzz1DSzgeHUycXQak9PBXP5AXr\n3zYzBHZl15mQv7giBvJfkFYRdpYCBivtatHD5JnSfUZtO8v/4FlwxuBE9qnkdVIn\nIBAZ7ELtn49aZ1vhaIwf4960shnAZxry89tcl48BfWAe+naYy7fQ8BfOavbOEpJl\nVE5ACdMswm5byMU4NcCxCtHiZ8Vp6fRLea+AKS/yk+bnRkQ5K/PI3UQ9ULXqmXDP\nk0JRkm/+8slK5/fSycFnXxnJa8t4C9a5HFJoyNt4gpII9PxSKXLzvuQaTWmpkjtg\nY6OsNGRwKRTPcEMfqplLceqhaEjfmgoXx9bqpWtcwQKBgQDtx6pEh6azntftQkT/\nhiLCakNWPBkqxNs0GxT4Cg03Bqf43a+OptQVFSYche3tdi2ll/+4gN19Q54wvs+k\n43xSvIQgj+eSItZLCfFp37g10UYKutKVn4XYwaJWOwNkfedlwvVNCaD4igtRMhu6\nDKcxRW5ErxV6yLAwltmmogsRoQKBgQDGZFvaQvhpKO3cvAnpgvWALqJdM+olqGoE\nyiCkz2j/Y2eUQOVBA9nleQEJDuPNDjAuOryQ+C65lOby/C72u9BhILtb4+RFz84y\nSrYekIlCERfWDU4DUAvqFt3xjJLrJU4dVQNYzs7YVQkB3Z3NsI21qhY7ySqpNkvE\n6xu8eFbMRwKBgQDTIJl3tfb3wE+7tD7tn92XQKE/nac/CYIVVwKcZthrBnb5C2YJ\nROpFOf0YEHc9hNRtF3SRD6MayYJZh+N5ZiAKmqa6/uvAHzylblO0DVhUONh3SIEZ\nJ4bB+tS4ujd98CkZey0x1R3f8TqxQsvJu9hscFjDla590lpXGmpxgapQYQKBgFxX\nSgmFMmqACna7b0GpGuvWyOvoxgtRIEeqbRdJEu4MLqHqsspYKIuOjtTQgWdoOzTJ\nUguH+PeYPwbKKnHdaVhMC+jxYca8upTeAXaof7qoiheviagxEdqbWiKb86ZPbtRo\nRW6Ik+5NZivgIxsiGlN8H20kbR7ljs7RP8+xk3TxAoGAKlPgmgD8X7h1yoP1zjd3\nMfa891UT90k4PVRqRfwfr8q6ciTZIIPC0v2GhcL8Ohgv7d3aqcXDqAK3dxwsOQmu\nlVq1I41eCMDwumOpoQZPXcwhWKEzlp3hh0blp7AKuk7zUfYBiMKeyL4jlBnlcVhv\nWFTJqn3MgWhF3BBjlpvQn64=\n-----END PRIVATE KEY-----\n",
    "client_email": "link-d-law-bucket@link-d-law.iam.gserviceaccount.com",
    "client_id": "113821782235880508947",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/link-d-law-bucket%40link-d-law.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }`
const bucketName = "link-d-law"

const multer = Multer({
    storage: Multer.memoryStorage()
})

const storage = new Storage({
    projectId,
    keyFilename
})

const bucket = storage.bucket(bucketName)

const uploadImageTemp = (req: Request, res: Response) => {
    try {
        if (req.file) {
            console.log("1")
            const blob = bucket.file(req.file.originalname)
            const blobStream = blob.createWriteStream()

            console.log("2")

            blobStream.on("finish", () => {
                console.log("3")
                res.status(200).json({
                    ok: true,
                    message: "Success upload image"
                })
            })

            blobStream.on("error", (err) => {
                console.error("Error uploading to Google Cloud Storage:", err);
                res.status(500).send("Error uploading to Google Cloud Storage");
            })
            
            console.log("4")
            blobStream.end(req.file.buffer);
            console.log("5")
        } else throw "error with img";
    } catch (error) {
        console.log("6")
        res.status(400).json({
            ok: false,
            message: error
        })
    }
    res.status(400).json({
        ok: false,
        message: "gagal"
    })
}


const router: Router = Router()

//TODO: upload image to google cloud bucket
router.post("/image", AuthMiddleware, multer.single("imgFile"), uploadImageTemp)

export default router