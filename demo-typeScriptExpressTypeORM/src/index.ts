// import server from "./server";
// import { PORT } from "./config/envs";


// server.listen(3001, () => {
//     console.log(`Server listening on port ${PORT} !`);
// })

import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
    .then(res => {
        console.log("Successful connection to database");    
        server.listen(PORT, () => {
            console.log(`Server listening on PORT ${PORT}`);    
        })    
})