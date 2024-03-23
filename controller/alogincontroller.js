const adminlogin = require('../model/adminloginmodel')
exports.login = async (req, res) => {
    var data = await adminlogin.create(req.body)
    res.status(200).json({
        status:"login",
        data
    })
}