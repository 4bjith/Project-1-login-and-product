import express from 'express'
import {cateItem} from '../controller/IndCatagory.js'

const indCatagory = express.Router();

indCatagory.get('/catitem/:name',cateItem)

export default indCatagory