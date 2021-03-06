import {verifyRecords} from "../services/Reconciliation.service";
import {NextFunction, Response, Request} from 'express';
import NetworkExceptions from "v1/util/NetworkExceptions";

const reconcileTransactions = async (req: any, res: Response) => {

    if (!req.files) {
        res.statusCode = 400
        return res.send({
            error: true,
            message: "You did not upload any files"
        });

    }


    await verifyRecords(req, res);


}


const systemStatus = (_req: Request, res: Response) => {

    res.statusCode = 200
    return res.send({
        message: "The microservice is up and running"
    });
}

export {reconcileTransactions, systemStatus}
