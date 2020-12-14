import express from 'express'
import {authUser, getUserProfile, regUser} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/').post(regUser)
router.route('/profile').get(protect,getUserProfile)

export default router