import { model, Schema } from 'mongoose'

const ProductSchema = new Schema({
    Name: {
        required: true,
        type: String,
    },
    Quantity: {
        required: true,
        type: Number,
    },
    Price: {
        required: true,
        type: Number,
    },

}, {
    timestamps: true
})

export default model('Product', ProductSchema)