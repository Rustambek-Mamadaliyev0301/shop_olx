const router = require("express").Router();
const {userRegGetController,userLoginGetController,userLoginPostController,userVerifyGetController,userSignUpPostController,userExitGetController,userProfileGetController,userSessionGetController, userSessionDeleteController} = require("../controllers/userRouteController");
const authMiddleWare = require("../middleware/authMiddleWare");

router.get("/signup",userRegGetController);
router.get("/login",userLoginGetController);
router.get("/verify/:id",userVerifyGetController);
router.post("/signup",userSignUpPostController);
router.get("/exit",userExitGetController);
router.post("/login",userLoginPostController);
router.get("/sessions/delete/:id",authMiddleWare,userSessionDeleteController);
router.get("/sessions",authMiddleWare,userSessionGetController);



router.get("/:id",authMiddleWare,userProfileGetController);

router.get("/sessions",authMiddleWare,userSessionGetController)

module.exports = {
    path: "/users",
    router,
}