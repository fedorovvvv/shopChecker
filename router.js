import Router from "express";
import {CheckerController} from "./Checker/CheckerController.js";

const router = new Router()

router.get('/check', CheckerController.checkAll)
router.get('/check/find', CheckerController.checkFind)

export default router