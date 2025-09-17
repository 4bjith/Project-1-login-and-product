import express from 'express'
import mongoose, { Mongoose } from 'mongoose'

const caragorySchema = new mongoose.Schema({
    catagoryName:String,
    catagoryImage:String,
})

const catagoryModel = mongoose.model('catagory',caragorySchema)

export default catagoryModel