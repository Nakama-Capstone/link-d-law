import { Storage } from '@google-cloud/storage'
import { Request, Response } from 'express'
// import { db } from '../connection/database'

const uploadImage = async (req: Request, res: Response) => {
  try {
    const uploadedFiles = req.files?.image

    if (!uploadedFiles) {
      return res.status(400).json({
        ok: false,
        message: 'No file uploaded.',
      });
    }

    const uploadedFile = Array.isArray(uploadedFiles) ? uploadedFiles[0] : uploadedFiles
    const imageBuffer = uploadedFile.data;

    const bucketName = 'link-d-law';

    const destFileName = 'image1';

    // Creates a client
    const storage = new Storage();
    const options = {
      destination: destFileName,
      preconditionOpts: {ifGenerationMatch: 0},
    };

    const responseUploadImage = await storage.bucket(bucketName).upload("/app/public/foto.png", options);
    res.json({
      ok: true,
      message: responseUploadImage
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: error
    })
  }
}

export { uploadImage }