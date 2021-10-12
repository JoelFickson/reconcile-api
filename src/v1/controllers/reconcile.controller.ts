import {verifyRecords} from "../services/Reconciliation.service";
import {NextFunction, Response} from 'express';
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



const systemStatus = async (res: Response) => {
    res.status(200).json({
        message: "The microservice is up and running"
    });


}

export {reconcileTransactions, systemStatus}
