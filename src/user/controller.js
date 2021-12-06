const item = require('./service');

module.exports.create = async (req, res) => {
    const userData = await item.create(req. body);
    res.send(userData);
}

module.exports.getAllItems = async (req, res) => {
    const userData = await item.getAllItems();
    res.send(userData);
}

module.exports.update = async (req, res) => {
    const userData = await item.update(req.params, req.body);
    res.send(userData);
}

module.exports.delete = async (req, res) => {
    const userData = await item.delete(req.params);
    res.send(userData);
}