const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema(
    {
        name: {
            type: String,
            required: true 
        },
        quantity: {
            type: Number,
            required: true 
        },
        isSanitized: Boolean,
        unit: {
            type: String,
            required: true 
        },
        expiryDate: {
            type: Date,
            default: null
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        updatedDate: {
            type: Date,
            default: Date.now
        },
        category: {
            enum: [ 'Grocery', 'Medical', 'Fruits&Veg', 'Beverages', 'Babycare', 'Cleaning' ],
            type: String
        },
        location: {
            enum: [ 'Store', 'Kitchen' ],
            type: String
        }
    }
);

itemsSchema.pre('create', () => {
    this.set({ createdDate: Date.now() });
});

itemsSchema.post('update', () => {
    this.set({ updatedDate: Date.now() });
});

const ItemModel = mongoose.model('items', itemsSchema);

module.exports = ItemModel;
