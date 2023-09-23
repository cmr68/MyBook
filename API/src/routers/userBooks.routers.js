const {Router} = require("express");
const router = Router();
const userBookstCtrl = require("../controller/userBooks.controller");
//------- USER ---------//

router.put("/user",userBookstCtrl.putUser)

router.get("/register",userBookstCtrl.getAll);

router.post("/register",userBookstCtrl.postRegister);

router.post("/login",userBookstCtrl.postLogin);

//------------ BOOKS -----------//
router.get("/books",userBookstCtrl.getBook);

router.post("/books",userBookstCtrl.postBook);

router.put("/books",userBookstCtrl.putBook);

router.delete("/books",userBookstCtrl.deleteBook);


module.exports = router;