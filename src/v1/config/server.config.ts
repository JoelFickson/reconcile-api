import express from 'express';
import cors from "cors";
import expressFileUpload from "express-fileupload";
import swaggerUi from "swagger-ui-express";

import reconcileRoutes from "../../v1/routes/reconcile.routes";
import ErrorHanlder from "../errors/ErrorHandler";

const app = express();

app.use(express.json());

const serverParams = {
    port: process.env.PORT || 8080
}


app.use(cors())
app.use(expressFileUpload());
app.use(ErrorHanlder);


app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);


app.use("/", reconcileRoutes);

export {
    serverParams
}

export default app;