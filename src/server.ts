import server, { serverParams} from "./v1/config/server.config";
import AppLogger from "./v1/errors/AppLogger";


AppLogger();

const host = serverParams.hostName as string;
const port = serverParams.port as number;



server.listen(port, host, () => {
    console.log(`Tutuka Reconciliation MicroService running on  on  http://${host}:${ port}`)
 
})

