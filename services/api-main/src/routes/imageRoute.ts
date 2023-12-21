import { Request, Response, Router } from "express"
import { AuthMiddleware, RequestAuthMiddleware } from '@/middleware/middleware'
import { GoogleAuth } from 'google-auth-library'
// import { uploadImage } from "@/controllers/imageController"
// import { Storage } from "@google-cloud/storage"
import axios from "axios"
import Multer from "multer"
import path from "path"
import crypto from "crypto"
import { db } from "@/connection/database"

// const projectId = "link-d-law"
const keyFilename = JSON.parse(process.env.ACCOUNT_SERVICE || "{}")
const bucketName = "link-d-law"

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
})

// const storage = new Storage({
//     projectId,
//     keyFilename
// })

// const bucket = storage.bucket(bucketName)

async function getAccessToken() {
  const auth = new GoogleAuth({
      // keyFile: 'PATH_TO_YOUR_SERVICE_ACCOUNT_JSON', // Ganti dengan path ke file JSON kredensial service account Anda
      credentials: keyFilename,
      scopes: 'https://www.googleapis.com/auth/cloud-platform'
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();
  return accessToken;
}

async function uploadFileToGCS(bucketName: string, fileName: string, filePath: Buffer, accessToken: string) {
  const url = `https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o?uploadType=media&name=${fileName}`;
  const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/octet-stream'
  };

  const response = await axios.post(url, filePath, { headers });
  return response.data as {
    selfLink: string,
  }
}

const uploadImageTemp = async (req: Request, res: Response) => {
  const { auth } = req as RequestAuthMiddleware

  try {
    await multer.single("imgFile")
    if (!req.file) return res.status(400).send({ message: "Please upload a file!" });

    // random with crypto
    const extname = path.extname(req.file.originalname)
    const filename = 'user_profile_' + crypto.createHash('sha256').update(Math.random() + req.file.originalname + Math.random() + Date.now() + Math.random()).digest('hex') + extname
    
    const restoken = await getAccessToken()
    const gcsRes = await uploadFileToGCS(bucketName, filename, req.file.buffer, restoken.token as string);
    const imageData = {
      ...gcsRes,
      url: `https://storage.googleapis.com/${bucketName}/${filename}`
    }

    // get user
    await db.user.update({
      data: {
        image: imageData.url
      },
      where: {
        id: auth.user.id
      }
    })
    const newUser = await db.user.findUnique({
      where: {
        id: auth.user.id
      },
      select: {
        id: true,
        image: true,
      }
    })


    return res.status(200).send({
      ok: true,
      message: "Uploaded the file successfully: " + filename,
      data: {
        image: imageData,
        user: newUser,
      }
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
        ok: false,
        message: "failed"
    })
  }
}


const router: Router = Router()

//TODO: upload image to google cloud bucket
router.post("/image", AuthMiddleware, multer.single("imgFile"), uploadImageTemp)

export default router