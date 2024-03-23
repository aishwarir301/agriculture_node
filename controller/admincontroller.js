var adminmodel = require('../model/adminmodel');
exports.add = async (req, res) => {
    var img_name = req.file.originalname;
    req.body.img = img_name;
    var data = await adminmodel.create(req.body);
    res.status(200).json({
        status: "record inserted",
        data
    })
}
exports.select = async (req,res)=>{
    var id = req.params.id
    var data = await adminmodel.findById(id,res.body)
    res.status(200).json({
        status: "record selected",
        data
    })

}
exports.remove = async (req,res)=>{
    var id = req.params.id
    var data = await adminmodel.findByIdAndDelete(id)
    res.status(200).json({
        status: "record delete",
        data
    })

}
exports.update = async (req,res)=>{
    var id = req.params.id
    var data = await adminmodel.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: "record delete",
        data
    })
}
