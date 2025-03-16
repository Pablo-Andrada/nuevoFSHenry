// import server from "./server";
// import { PORT } from "./config/envs";


// server.listen(3001, () => {
//     console.log(`Server listening on port ${PORT} !`);
// })

import { PORT } from "./config/envs";
import server from "./server";

server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);    
})