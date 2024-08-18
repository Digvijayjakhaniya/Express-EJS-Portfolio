import express from 'express'
import { home } from '../controllers/homeController.js'
import { skill } from '../controllers/skillController.js'
import { services } from '../controllers/serviceController.js'
import { contact } from '../controllers/contactController.js'

const router = express.Router()

router.get('/',home)
router.get('/services',services)
router.get('/skill',skill)
router.get('/contact',contact)


export default router