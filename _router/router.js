const express = require('express');
const router = express.Router();
const infoRouter = require('../_mongoose/infoSchem');

router.get('/', async (req, res) => {
   var getAll = await infoRouter.find();
   res.json(getAll);    
});

router.post('/', async(req, res) => {
    var data = new infoRouter({
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    })
    await data.save();
    res.json(data);
});
router.put('/update', async (req, res) => {
    var update = await infoRouter.updateOne({
        _id: req.body._id
    },{
        $set: {
            Name: req.body.Name,
            Age: req.body.Age,
            City: req.body.City
        }
    });
    res.json(update);
});
router.delete('/del/:id', async (req, res) => {
    var dele = await infoRouter.findByIdAndDelete(req.params.id)
        .then(e => {
            res.json({message: "Deleted Info data successfully"})
        });
    res.json(dele);
});
module.exports = router;