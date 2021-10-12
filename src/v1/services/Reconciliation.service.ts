import {NextFunction, Response} from "express"
import csvtojson from "csvtojson";
import NetworkExceptions from "v1/util/NetworkExceptions";


const verifyRecords = async (req: any, res: Response) => {


    const {fileOne, fileTwo} = req.files;

    fileOne.mv(__dirname + '/' + fileOne.name);
    fileTwo.mv(__dirname + '/' + fileTwo.name);

    const firstFile: string = __dirname + `/${fileOne.name}`;
    const secondFile: string = __dirname + `/${fileTwo.name}`;


    const fileOneJson = await csvtojson().fromFile(firstFile);
    const fileTwoJson = await csvtojson().fromFile(secondFile);


    const matched = fileOneJson.filter(({TransactionID: transactionId}) => fileTwoJson.some(({TransactionID: id2}) => id2 === transactionId));
    const unmatched = fileOneJson.filter(({TransactionID: id1}) => !fileTwoJson.some(({TransactionID: id2}) => id2 === id1));


    return res.status(200).json({
        matched,
        unmatched
    });


}


export {
    verifyRecords
}