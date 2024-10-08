import { CorsOptions } from "cors";

import colors from "colors";

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    const whitelist = [process.env.FRONTEND_URL];
    console.log(whitelist);
    console.log(origin);
    if (process.argv[2] === "--api") {
      whitelist.push(undefined);
    }
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error de CORS"));
    }
  },
};
