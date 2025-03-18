// import "dotenv/config";

// export const PORT = process.env.PORT

import "dotenv/config";

export const PORT = parseInt(process.env.PORT?.trim() || "3000", 10);
