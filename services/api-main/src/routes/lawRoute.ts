import { Router } from 'express'
import { getAllLaw, getAllPasalFromLaw, getDetailPasal } from '../controllers/lawController'

const router: Router = Router()

// TODO: get all user
router.get("/login", (req, res) => {
  res.json({
    ok: true,
    message: "🚀 login",
  })
})

//TODO: get all law
router.get("/laws", getAllLaw)

//TODO: get all pasal from law
router.get("/laws/:law", getAllPasalFromLaw)

//TODO: get detail pasal
router.get("/laws/:law/:pasal", getDetailPasal)

export default router