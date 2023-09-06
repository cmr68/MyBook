const {Router} = require("express");
const router = Router();
const markstCtrl = require("../controller/marks.controller");

router.get("/marks",markstCtrl.getMarks);
router.get("/media",markstCtrl.getMedia);

router.get("/apuntadas",markstCtrl.getApuntadas);
router.get("/impartidas",markstCtrl.getImpartidas);

module.exports = router;