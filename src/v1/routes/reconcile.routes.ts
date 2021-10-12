import {Router} from "express";
import {reconcileTransactions, systemStatus} from "../../v1/controllers/reconcile.controller";

const route = Router();

route.get("/", systemStatus)
route.post("/", reconcileTransactions)


export default route;
