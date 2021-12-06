const ItemModel = require('./model');

module.exports.create = async ({ itemName, itemQty, itemSanitized, itemUnit, itemExpiry, itemCategory, itemLocation }) => {
    const item = await ItemModel.create({
        name: itemName,
        quantity: itemQty,
        isSanitized: itemSanitized,
        unit: itemUnit,
        expiryDate: itemExpiry,
        category: itemCategory,
        location: itemLocation
    });
    return item;
};

module.exports.getAllItems = async () => {
    const items = await ItemModel.find();
    return items;
}

module.exports.update = async ({id}, { itemName, itemQty, itemSanitized, itemUnit, itemExpiry, itemCategory, itemLocation }) => {
    const items = await ItemModel.findOneAndUpdate(
        {
            _id: id
        },
        {
            name: itemName,
            quantity: itemQty,
            isSanitized: itemSanitized,
            unit: itemUnit,
            expiryDate: itemExpiry,
            category: itemCategory,
            location: itemLocation
        },
        {
            new: true
        }
    );
    return items;
}

module.exports.delete = async ({ id }) => {
    const itemsDeleted = await ItemModel.findOneAndDelete({
        _id: id
    });
    return itemsDeleted;
}
