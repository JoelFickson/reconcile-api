import {NextFunction, Request, Response} from "express";

// import * as request from "supertest";
//
// import server from "../v1/config/server.config"

import {reconcileTransactions, systemStatus} from "../v1/controllers/reconcile.controller"

describe("Controller/ Reconcile", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject = {};

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation((result) => {
                responseObject = result;
            })
        };
    });

    test('get error if there are no files uploaded', async () => {

        const expectedStatusCode = 400;
        const expectedReponse = {error: true, message: 'You did not upload any files'}

        await reconcileTransactions(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedReponse);


    });
    //
    // test('get success if files are uploaded', async () => {
    //
    //
    //     request(server).post('/')
    //         .field('extra_info', '{"in":"case you want to send json along with your file"}')
    //         .attach('fileOne', __dirname + `/sample/clientmarkofffile20140114.csv`)
    //         .attach('fileTwo', __dirname + `/sample/clientmarkofffile20140114.csv`)
    //         .end(function (err: any, res: any) {
    //
    //             console.log(res);
    //             console.log(err);
    //
    //         });
    //
    //
    // });


});
describe("Check System Status", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject = {};

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation((result) => {
                responseObject = result;
            })
        };
    });

    test('return system is up & running', async () => {

        const expectedStatusCode = 200;
        const expectedReponse = {message: 'The microservice is up and running'}

        await systemStatus(mockRequest as Request, mockResponse as Response);


        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedReponse);


    });


});