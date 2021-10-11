const router = require("express").Router();
const {adsAddGetController,adsAddPostController} = require("../controllers/adsController");
const fileUpload =  require("express-fileupload");


const fileUploadForAds  = fileUpload({
    saveFileNames:true,
});

router.get("/add",adsAddGetController);
router.post("/add",fileUploadForAds,adsAddPostController);


module.exports = {
    path:"/ads",
    router,
}