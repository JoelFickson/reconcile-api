import winston from "winston";

const AppLogger = () => {
    winston.add(new winston.transports.File({filename: 'logs/logfile.txt'}));


    process.on('uncaughtException', err => {

        winston.error(err.message, err)
    });

}

export default AppLogger;