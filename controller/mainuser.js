var adminmodel = require('../model/adminmodel');

exports.mainpage = async (req, res) => {
    var data = await adminmodel.find({}, { img: 1, pname: 1, quantity: 1, per: 1 })
    // const data = await adminmodel.find({},{img:0})
    res.status(400).json({
        status:"show",
        data
    })
}