import server, { serverParams} from "./v1/config/server.config";
import AppLogger from "./v1/errors/AppLogger";


AppLogger();


const port = serverParams.port as number;



server.listen(port, () => {
    console.log(`Tutuka Reconciliation MicroService is up and running`)
 
})

